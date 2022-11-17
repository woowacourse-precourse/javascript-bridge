const OutputView = require("./OutputView.js");
const InputView = require("./InputView.js");
class App {
  play() {
    OutputView.printGameStart();
    const BRIDGE_SIZE = InputView.readBridgeSize();
  }
}

module.exports = App;
