const OutputView = require("./OutputView");

class App {
  start() {
    OutputView.printStart();
  }
  play() {
    this.start();
  }
}

module.exports = App;
