const { BRIDGE_CONSTANTS } = require('./utils/constants');
const ERROR_MESSAGE = require('./utils/ErrorMessage');

class Validator {
  static checkBridgeLength (size) {
    return this.checkBridgeLengthInRange(size) && this.isNumeric(size);
  }

  static checkBridgeLengthInRange (size) {
    if (size < BRIDGE_CONSTANTS.minimum  || BRIDGE_CONSTANTS.maximum < size) {
      throw new Error(ERROR_MESSAGE.bridgeLengthRange);
    }
    return true;
  }

  static isNumeric (value) {
    if (!/^-?\d+$/.test(value)) {
      throw new Error(ERROR_MESSAGE.bridgeLengthRange);
    }
    return true;
  }
}

module.exports = Validator;
