const OutputView = require("./OutputView");
const InputView = require("./InputView");

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
