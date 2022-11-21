const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const Validator = require("./Validator.js");
const Values = require("./constants/Values.js");

class App {
  #game;
  constructor() {
    OutputView.printGameStart();
  }
  play() {
    InputView.readBridgeSize.bind(this)(this.createBridge);
  }
  createBridge(size) {
    const isCleared = this.checkError(Validator.checkSizeInput, size);
    if (isCleared) {
      this.#game = new BridgeGame(size);
      this.askMoving();
    }
  }
  askMoving() {
    InputView.readMoving.bind(this)(this.handleMoving);
  }
  handleMoving(direction) {
    const isCleared = this.checkError(Validator.checkDirectionInput, direction);
    if (isCleared) {
      this.#game.move(direction);
      OutputView.printMap(this.#game.stepObj);
      this.checkStatus();
    }
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
    const isCleared = this.checkError(Validator.checkCommandInput, command);
    if (isCleared) {
      if (command === Values.RESTART) return this.restartGame();
      return this.showGameResult();
    }
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
