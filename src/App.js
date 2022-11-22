const BridgeGame = require("./BridgeGame");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

class App {
  #bridgeGame = null;

  play() {
    this.showGreeting();
  }

  showGreeting() {
    OutputView.printGreeting();
    InputView.readBridgeSize((bridgeSize) =>
      this.readBridgeSizeCallback(bridgeSize),
    );
  }

  readBridgeSizeCallback(bridgeSize) {
    this.#bridgeGame = new BridgeGame(parseInt(bridgeSize, 10));
    this.routeReadMoving();
  }

  routeReadMoving() {
    this.#bridgeGame.isFinished()
      ? this.showResult(true)
      : this.showReadMoving();
  }

  showReadMoving() {
    InputView.readMoving((command) => this.readMovingCallback(command));
  }

  readMovingCallback(command) {
    this.#bridgeGame.move(
      command,
      () => this.showMoveSuccess(),
      () => this.showMoveFail(),
    );
  }

  showMoveSuccess() {
    OutputView.printMap(this.#bridgeGame.progress);
    this.routeReadMoving();
  }

  showMoveFail() {
    OutputView.printMap(this.#bridgeGame.progress);
    this.showReadGameCommand();
  }

  retryCallback(command) {
    this.#bridgeGame.retry(
      command,
      () => this.routeReadMoving(),
      () => this.showResult(false),
    );
  }

  showReadGameCommand() {
    InputView.readGameCommand((command) => this.retryCallback(command));
  }

  showResult(isSuccess) {
    OutputView.printResult(isSuccess, this.#bridgeGame);
  }
}

module.exports = App;
