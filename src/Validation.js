const Validation = {
  validateBridgeSize(bridgeSize) {
    this.validateIsNumber(bridgeSize);
  },

  validateIsNumber(bridgeSize) {
    if (isNaN(bridgeSize)) {
      throw new Error('[ERROR] 다리의 길이는 숫자만 입력해야 합니다.');
    }
  },
};

module.exports = Validation;
