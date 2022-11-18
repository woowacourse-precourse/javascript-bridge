const OutputView = require("./OutputView.js");
const RecallUntilCorrect = require("./RecallUntilCorrect");
class App {
  play() {
    OutputView.printGameStart();
    const BRIDGE_SIZE = RecallUntilCorrect.recallReadBridgeSize(true);
  }
}

module.exports = App;
