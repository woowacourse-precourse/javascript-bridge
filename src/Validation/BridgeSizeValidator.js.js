const { ERROR } = require('../Constant/message');

class BridgeSizeValidator {
  #bridgeSize;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.validate(bridgeSize);
  }

  validate(bridgeSize) {
    this.isValidScope(bridgeSize);
    this.isValidType(bridgeSize);
  }

  isValidScope(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(ERROR.SCOPE);
    }
  }

  isValidType(bridgeSize) {
    if (!new RegExp('^[0-9]+$').test(bridgeSize)) {
      throw new Error(ERROR.TYPE);
    }
  }
}

module.exports = BridgeSizeValidator;

