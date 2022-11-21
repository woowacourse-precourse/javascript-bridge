const InputView = require('../src/InputView');
const OutputView = require("../src/OutputView");

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
