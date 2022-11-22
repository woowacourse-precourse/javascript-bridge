const OutputView = require("./OutputView");
const InputView = require("./InputView");

class App {
  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize();
  }
}
const a = new App();
a.play();
module.exports = App;
