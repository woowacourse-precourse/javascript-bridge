const { readMoving } = require('../src/InputView');
const InputView = require('../src/InputView');
const OutputView = require("../src/OutputView");

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize();
    readMoving();
  }
}

module.exports = App;
