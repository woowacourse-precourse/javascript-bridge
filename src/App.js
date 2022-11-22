const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");
class App {
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
  }
}

module.exports = App;
