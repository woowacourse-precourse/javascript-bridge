const OutputView = require("./OutputView.js");
const RecallUntilCorrect = require("./RecallUntilCorrect.js");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class App {
  play() {
    OutputView.printGameStart();
    const BRIDGE_SIZE = RecallUntilCorrect.recallReadBridgeSize(true);
    const BRIDGE_MAP = BridgeMaker.makeBridge(BRIDGE_SIZE,BridgeRandomNumberGenerator.generate);
    console.log(BRIDGE_MAP);
  }
}

module.exports = App;
