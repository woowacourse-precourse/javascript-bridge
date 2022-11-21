const { NUMBER, ERROR } = require('./data/constants');
const IO = require('./IO');

class Validator {
  static validateBridgeLength(length) {
    if (
      Validator.isExceedRange(
        length,
        NUMBER.MIN_BRIDGE_SIZE,
        NUMBER.MAX_BRIDGE_SIZE,
      )
    ) {
      IO.output(ERROR.BRIDGE_SIZE);
      return false;
    }
    return true;
  }

  static isExceedRange(value, from, to) {
    if (value < from || value > to) return true;
    return false;
  }
}
module.exports = Validator;
