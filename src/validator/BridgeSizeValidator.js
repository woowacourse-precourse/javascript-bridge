const { ERROR_MESSAGE } = require('../util/Constant');
class BridgeSizeValidator {
  constructor(bridgeSize) {
    this.validate(bridgeSize);
  }

  validate(bridgeSize) {
    if (this.isNull(bridgeSize)) throw new Error(ERROR_MESSAGE.IS_EMPTY);
    if (!this.isNumber(bridgeSize)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_NOT_NUMBER);
    if (this.isNotRightRange(bridgeSize)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_NOT_RIGHT_RANGE);
    return this.toInteger(bridgeSize);
  }

  toInteger(bridgeSize) {
    return parseInt(bridgeSize, 10);
  }

  isNull(bridgeSize) {
    return bridgeSize == '';
  }

  isNumber(bridgeSize) {
    const typeTest = /^[0-9]+$/;
    return typeTest.test(bridgeSize);
  }

  isNotRightRange(bridgeSize) {
    return this.toInteger(bridgeSize) < 3 || this.toInteger(bridgeSize) > 20;
  }
}
module.exports = BridgeSizeValidator;
