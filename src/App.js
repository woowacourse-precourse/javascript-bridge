const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

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
    if (result === "성공") {
      OutputView.printResult(this.#bridgeGame);
      return;
    }
    if (result === "실패") {
      InputView.readGameCommand(/** */);
      return;
    }
    InputView.readMoving(this.tryMove.bind(this));
  }
}

module.exports = App;
