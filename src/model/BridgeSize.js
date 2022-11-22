const VALID_VALUE = require('../constant/ValidValue');
const ERROR_MESSAGE = require('../constant/ErrorMessage');
const UserError = require('../util/UserError');

class BridgeSize {
  #size;

  constructor(size) {
    this.#size = size;
    this.validate();
  }

  validate() {
    this.checkRange();
    this.isNumber();
    this.isInteger();
  }

  checkRange() {
    if (
      this.#size < VALID_VALUE.SIZE.LOWER ||
      this.#size > VALID_VALUE.SIZE.UPPER
    ) {
      throw new UserError(ERROR_MESSAGE.RANGE);
    }
  }

  isInteger() {
    if (this.#size % 1 !== 0) {
      throw new UserError(ERROR_MESSAGE.INTEGER);
    }
  }

  isNumber() {
    if (this.#size) {
      return;
    }
    throw new UserError(ERROR_MESSAGE.NUMBER);
  }
}

module.exports = BridgeSize;
