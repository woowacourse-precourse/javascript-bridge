const OutputView = require("./OutputView");
const InputView = require("./InputView");

class App {
  play() {
    InputView.readBridgeSize();
    OutputView.printResult();
  }
}

module.exports = App;
