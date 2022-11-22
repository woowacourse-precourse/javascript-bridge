const OutputView = require("./OutputView");
const InputView = require("./InputView");

class App {
  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize();
  }
}

module.exports = App;
