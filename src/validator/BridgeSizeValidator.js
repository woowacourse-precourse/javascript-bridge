class BridgeSizeValidator {
  constructor(bridgeSize) {
    this.validate(bridgeSize);
  }

  validate(bridgeSize) {
    if (this.isNull(bridgeSize)) throw new Error('[ERROR] 값을 입력해야 합니다.');
    if (!this.isNumber(bridgeSize)) throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    if (this.isNotRightRange(bridgeSize)) throw new Error('[ERROR] 3이상 20이하 숫자를 입력해야 합니다.');
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
