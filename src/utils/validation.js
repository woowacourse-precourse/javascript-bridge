const { BRIDGE } = require("../constants/Constants");
const { ERROR_MESSAGE } = require("../constants/Message");

class Validator {
  static validateBridgeSize(size) {
    if (!Validator.isRightRange(size))
      throw new Error(ERROR_MESSAGE.NOT_RIGHT_BRIDGE_LENGTH);
  }

  static isRightRange(number) {
    return (
      number >= BRIDGE.MINIMUM_BRIDGE_LENGTH &&
      number <= BRIDGE.MAXIMUM_BRIDGE_LENGTH
    );
  }
}

module.exports = Validator;
