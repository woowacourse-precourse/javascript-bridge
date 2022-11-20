const { printMessage } = require('./Utils.js');
const BridgeSize = require('./Validate/BridgeSize.js');
const SafeBridge = require('./Validate/SafeBridge.js');
const InputView = require('./View/InputView.js');

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
      this.inputMoving();
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.InputBridgeSize();
    }
  }

  inputMoving() {
    InputView.readMoving((command) => {
      const safeBridge = new SafeBridge(command);
      this.checkReInputMoving(safeBridge);
    });
  }

  checkReInputMoving(safeBridge) {
    try {
      safeBridge.validate();
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.inputMoving();
    }
  }
}

module.exports = Controller;
