/* eslint-disable class-methods-use-this */
const { ERROR } = require('../util/Constant');

class CheckBridgeSize {
  validate(size) {
    this.checkNotNumber(size);
    this.checkNotRange(size);
  }

  checkNotNumber(size) {
    if (Number.isNaN(size)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
  }

  checkNotRange(size) {
    if (size < 3 || size > 20) {
      throw new Error(ERROR.NOT_RANGE);
    }
  }
}

module.exports = CheckBridgeSize;
