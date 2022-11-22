const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { eventEmitter } = require("./EventEmitter");
const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.game = new BridgeGame();
    this.eventEmitter = eventEmitter;
    this.eventInitialize();
  }

  eventInitialize() {
    this.eventEmitter.on("readBridgeSize", (bridgeLength) => {
      this.setBridge(bridgeLength);
      this.getMovingDirection();
    });
    this.eventEmitter.on("readMoving", (direction) =>
      this.checkRightDirection(direction)
    );
    this.eventEmitter.on("retryOrExit", (answer) => this.retryOrExit(answer));
  }

  play() {
    OutputView.printStart();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize();
  }

  setBridge(bridgeLength) {
    this.game.setBridge(bridgeLength);
  }

  getMovingDirection() {
    InputView.readMoving();
  }

  checkRightDirection(direction) {
    const result = this.game.move(direction.toUpperCase());
    this.printResult(result);
  }

  printResult({ history, winThisTurn, gameEnd }) {
    OutputView.printMap(history);

    if (gameEnd) return this.finishGame(history);
    if (winThisTurn) return InputView.readMoving();
    this.askRetry();
  }

  finishGame(history) {
    OutputView.printMap(history, true);
    OutputView.printResult({
      result: this.game.result,
      totalTry: this.game.totalTry,
    });
    this.exit();
  }

  askRetry() {
    this.game.removeLastHistory();
    InputView.readGameCommand();
  }

  retryOrExit(answer) {
    if (answer === "R") {
      return this.retry();
    }
    this.finishGame(this.game.history);
  }

  retry() {
    this.game.retry();
    this.getMovingDirection();
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
