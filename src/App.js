const BridgeGame = require("./BridgeGame");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const {
  RETRY_COMMAND: { RETRY },
} = require("./core/BridgeGameCore");

class App {
  #bridgeGame = null;

  play() {
    this.showGreeting();
  }

  showGreeting() {
    OutputView.printGreeting();
    this.showInputBridgeNumber();
  }

  showInputBridgeNumber() {
    InputView.readBridgeSize((bridgeSize) => {
      this.#bridgeGame = new BridgeGame(parseInt(bridgeSize, 10));
      this.beforeShowInputMove();
    });
  }

  beforeShowInputMove() {
    if (this.#bridgeGame.isFinished()) {
      this.showResult(true);
      return;
    }
    this.showInputMove();
  }

  moveCallback(command) {
    this.#bridgeGame.move(
      command,
      this.moveSuccess.bind(this),
      this.moveFail.bind(this),
    );
  }

  showInputMove() {
    InputView.readMoving(this.moveCallback.bind(this));
  }

  moveSuccess() {
    OutputView.printMap(this.#bridgeGame.progress);
    this.beforeShowInputMove();
  }

  moveFail() {
    OutputView.printMap(this.#bridgeGame.progress);
    this.showInputRetry();
  }

  retryCallback(command) {
    if (command === RETRY) {
      this.#bridgeGame.retry(command);
      this.beforeShowInputMove();
      return;
    }
    this.showResult(false);
  }

  showInputRetry() {
    InputView.readGameCommand(this.retryCallback.bind(this));
  }

  showResult(isSuccess) {
    OutputView.printResult(isSuccess, this.#bridgeGame);
  }
}

module.exports = App;
