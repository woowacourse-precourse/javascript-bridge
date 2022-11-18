const { BRIDGE, COMMAND } = require('./constant/Bridge');
const { ERROR_MESSAGE } = require('./constant/Error');
const InvalidInputError = require('./error/InvalidInputError');

class Validator {
  static validateBridgeLength(length) {
    if (this.isValidLength(length)) return;
    this.throwException(InvalidInputError, ERROR_MESSAGE.BRIDGE_LENGTH);
  }

  static throwException(Error, message) {
    throw new Error(message);
  }

  static isValidLength(length) {
    return length >= BRIDGE.LENGTH_MIN && length <= BRIDGE.LENGTH_MAX;
  }
}

module.exports = Validator;
