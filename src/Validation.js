const Validation = {
  validateBridgeSize(bridgeSize) {
    this.validateIsNumber(bridgeSize);
    this.validateIsRange(bridgeSize);
  },

  validateIsNumber(bridgeSize) {
    if (isNaN(bridgeSize)) {
      throw new Error('[ERROR] 다리의 길이는 숫자만 입력해야 합니다.');
    }
  },

  validateIsRange(bridgeSize) {
    const MIN_SIZE = 3;
    const MAX_SIZE = 20;
    if (bridgeSize < MIN_SIZE || bridgeSize > MAX_SIZE) {
      throw new Error('[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.');
    }
  },
};

module.exports = Validation;
