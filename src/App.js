const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { MESSAGE } = require("./constants");

class App {
  #bridgeGame;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.tryMakeBridge.bind(this));
  }

  tryMakeBridge(input) {
    const size = Number(input);
    try {
      this.#bridgeGame = new BridgeGame(size);
      InputView.readMoving(this.tryMove.bind(this));
    } catch ({ message }) {
      Console.print(message);
      InputView.readBridgeSize(this.tryMakeBridge.bind(this));
    }
  }

  tryMove(input) {
    try {
      this.#bridgeGame.move(input);
      OutputView.printMap(this.#bridgeGame);
      this.handleResult();
    } catch ({ message }) {
      Console.print(message);
      InputView.readMoving(this.tryMove.bind(this));
    }
  }

  handleResult() {
    const result = this.#bridgeGame.getResult();
    if (result === MESSAGE.SUCCESS) {
      OutputView.printResult(this.#bridgeGame);
      return;
    }
    if (result === MESSAGE.FAILURE) {
      InputView.readGameCommand(this.tryRetry.bind(this));
      return;
    }
    InputView.readMoving(this.tryMove.bind(this));
  }

  tryRetry(input) {
    try {
      const retry = this.#bridgeGame.retry(input);
      if (retry) InputView.readMoving(this.tryMove.bind(this));
      if (!retry) OutputView.printResult(this.#bridgeGame);
    } catch ({ message }) {
      Console.print(message);
      InputView.readGameCommand(this.tryRetry.bind(this));
    }
  }
}

const app = new App();
app.play();

module.exports = App;
