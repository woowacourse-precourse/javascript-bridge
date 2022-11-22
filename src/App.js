const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");

class App {
  #bridgeGame;
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
    this.playing();
  }
  playing() {}
}

module.exports = App;
