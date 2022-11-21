const { NUMBER, ERROR, DIRECTION } = require('./data/constants');
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

  static validateBridgeDirection(direction) {
    if (direction === DIRECTION.UP || direction === DIRECTION.DOWN) return true;
    IO.output(ERROR.BRIDGE_DIRECTION);
    return false;
  }

  static isExceedRange(value, from, to) {
    if (value < from || value > to) return true;
    return false;
  }
}
module.exports = Validator;
