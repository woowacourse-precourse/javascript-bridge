const InputView = require('./InputView');
const OutputView = require('./OutputView');

class bridgeController {
  constructor() {}

  run() {
    OutputView.printInit();
    this.inputSize();
  }

  inputSize() {
    InputView.readBridgeSize();
  }
}

module.exports = bridgeController;
