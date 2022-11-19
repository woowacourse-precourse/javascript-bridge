const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  play() { }

  processAfterGettingBridgeSize(size) {
    const PATH = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
}

module.exports = App;
