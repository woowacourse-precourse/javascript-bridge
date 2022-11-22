const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printStartMent();
    InputView.readBridgeSize();
  }
}
module.exports = App;
