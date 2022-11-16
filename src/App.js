const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printGetStarted();
  }
}

App.prototype.play();

module.exports = App;
