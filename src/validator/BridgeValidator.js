const ERROR_MESSAGE = require("../constants/ErrorMessage");

class BridgeValidator {
  validate(bridge) {
    if(bridge.length < 3 || bridge.length > 20) {
      throw Error(ERROR_MESSAGE.BRIDGE_LENGTH);
    }
  }
}

module.exports = BridgeValidator;
