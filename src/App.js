const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  play() {
    this.opening();
  }

  opening() {
    OutputView.printOpening();
    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize();
  }
}

module.exports = App;
