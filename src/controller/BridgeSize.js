const VALID_VALUE = require('../constant/ValidValue');
const ERROR_MESSAGE = require('../constant/ErrorMessage');

class BridgeSize {
  #size;

  constructor(size) {
    this.#size = size;
    BridgeSize.validate(size);
  }

  static validate(size) {
    BridgeSize.checkRange(size);
    BridgeSize.isNumber(size);
    BridgeSize.isInteger(size);
  }

  static checkRange(size) {
    if (size < VALID_VALUE.SIZE.LOWER || size > VALID_VALUE.SIZE.UPPER) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
  }

  static isInteger(size) {
    if (size % 1 !== 0) {
      throw new Error(ERROR_MESSAGE.INTEGER);
    }
  }

  static isNumber(size) {
    if (size) {
      return;
    }
    throw new Error(ERROR_MESSAGE.NUMBER);
  }
}

module.exports = BridgeSize;
