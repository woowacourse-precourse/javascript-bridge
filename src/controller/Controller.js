const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const validator = require('../utils/validator');

class Controller {
  start() {
    OutputView.printGameStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  getBridgeSize(size) {
    try {
      validator.checkBridgeSizeInput(size);
    } catch {
      this.inputBridgeSize();
    }
  }

  getBridgeWay() {}
}

module.exports = Controller;
