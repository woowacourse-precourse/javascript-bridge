const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.size = 0;
  }

  play() {
    OutputView.printStart();
    this.Game();
  }

  Game() {
    this.size = InputView.readBridgeSize();
  }
}
module.exports = App;
