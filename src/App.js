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
      InputView.readMoving(/** */);
    } catch ({ message }) {
      Console.print(message);
      InputView.readBridgeSize(this.tryMakeBridge.bind(this));
    }
  }
}

module.exports = App;
