const InputView = require('../src/InputView');
const OutputView = require("../src/OutputView");

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize();
    InputView.readMoving();
  }
}

module.exports = App;
