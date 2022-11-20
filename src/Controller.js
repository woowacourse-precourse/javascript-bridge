const { printMessage } = require('./Utils.js');
const BridgeSize = require('./Validate/BridgeSize.js');
const InputView = require('./View/InputView.js');
const OutputView = require('./View/OutputView.js');

class Controller {
  constructor() {}

  InputBridgeSize() {
    InputView.readBridgeSize((size) => {
      const bridgeSize = new BridgeSize(size);
      this.checkReInputSize(bridgeSize);
    });
  }

  checkReInputSize(bridgeSize) {
    try {
      bridgeSize.validate();
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.InputBridgeSize();
    }
  }
}

module.exports = Controller;
