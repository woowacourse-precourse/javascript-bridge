const { BRIDGE, COMMAND } = require('./constant/Bridge');
const { ERROR_MESSAGE } = require('./constant/Error');
const InvalidInputError = require('./error/InvalidInputError');

class Validator {
  static throwException(Error, message) {
    throw new Error(message);
  }
}

module.exports = Validator;
