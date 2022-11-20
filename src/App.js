const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

class App {
  play() {
    OutputView.printGetStarted();
    InputView.readBridgeSize();
  }
}

App.prototype.play();

module.exports = App;
