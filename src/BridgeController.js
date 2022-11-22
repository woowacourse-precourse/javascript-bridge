const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validate = require('./Validate');

class bridgeController {
  constructor() {}

  run() {
    OutputView.printInit();
    this.inputSize();
    InputView.readBridgeSize(this.inputSize.bind(this));
  }

  inputSize(input) {
    Validate.isNumber(input);
  }
}

module.exports = bridgeController;
