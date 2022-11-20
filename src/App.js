const OutputView = require("./View/OutputView");

class App {
  play() {
    this.showGreeting();
  }

  showGreeting() {
    OutputView.printGreeting();
  }
}

module.exports = App;
