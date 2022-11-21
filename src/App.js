const OutputView = require("./OutputView.js");
const RecallUntilCorrect = require("./RecallUntilCorrect.js");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class App {
  play() {
    OutputView.printGameStart();
    const BRIDGE_SIZE = RecallUntilCorrect.recallReadBridgeSize(true);
    const BRIDGE_MAP = BridgeMaker.makeBridge(BRIDGE_SIZE,BridgeRandomNumberGenerator.generate);
    const player = new BridgeGame(BRIDGE_SIZE, BRIDGE_MAP);
    player.move();
  }
}

module.exports = App;
