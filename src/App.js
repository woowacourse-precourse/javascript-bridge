const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printGetStarted();
    InputView.readBridgeSize();
  }
}

App.prototype.play();

module.exports = App;
