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
    Validator.checkSizeInput(size);
    this.#game = new BridgeGame(size);
    this.askMoving();
  }
  askMoving() {
    InputView.readMoving.bind(this)(this.handleMoving);
  }
  handleMoving(direction) {
    Validator.checkDirectionInput(direction);
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
  handleGameCommand(direction) {
    Validator.checkCommandInput(direction);
    if (direction === Values.RESTART) return this.restartGame();
    return this.showGameResult();
  }
  restartGame() {
    this.#game.retry();
    this.askMoving();
  }
  showGameResult() {
    OutputView.printResult(this.#game.stepObj, this.#game.isSuccess, this.#game.numOfTrials);
  }
}

const app = new App();
app.play();

module.exports = App;
