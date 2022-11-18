const OutputView = require("./OutputView.js");
const InputView = require("./InputView.js");
const ValidCheck = require("./ValidCheck.js");
class App {
  play() {
    OutputView.printGameStart();
    const BRIDGE_SIZE = InputView.readBridgeSize();
    ValidCheck.bridgeIsInRange(BRIDGE_SIZE);
  }
}

module.exports = App;
