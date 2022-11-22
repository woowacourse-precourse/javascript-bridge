const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const BridgeGame = require("./BridgeGame");
const Validator = require("./utils/Validator.js");
const Values = require("./constants/Values.js");

class App {
  #game;

  constructor() {
    OutputView.printGameStart();
  }

  play() {
    InputView.readBridgeSize.bind(this)(this.handleCreatingBridge);
  }
  handleCreatingBridge(size) {
    const isNormalInput = this.checkError(Validator.checkSizeInput, size);
    if (!isNormalInput) return this.play();
    this.#game = new BridgeGame(size);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving.bind(this)(this.handleMoving);
  }
  handleMoving(direction) {
    const isNormalInput = this.checkError(Validator.checkDirectionInput, direction);
    if (!isNormalInput) return this.askMoving();
    this.#game.move(direction);
    OutputView.printMap(this.#game.stepObj);
    this.checkStatus();
  }
  checkStatus() {
    if (this.#game.isCleared) return this.showGameResult();
    if (this.#game.isSuccess) return this.askMoving();
    return this.askGameCommand();
  }

  askGameCommand() {
    InputView.readGameCommand.bind(this)(this.handleGameCommand);
  }
  handleGameCommand(command) {
    const isNormalInput = this.checkError(Validator.checkCommandInput, command);
    if (!isNormalInput) return this.askGameCommand();
    if (command === Values.RESTART) return this.restartGame();
    return this.showGameResult();
  }
  restartGame() {
    this.#game.retry();
    this.askMoving();
  }

  showGameResult() {
    OutputView.printResult(this.#game.stepObj, this.#game.isSuccess, this.#game.numOfTrials);
  }

  checkError(validator, input) {
    try {
      validator(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
