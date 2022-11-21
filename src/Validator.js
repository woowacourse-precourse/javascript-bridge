const Validator = {
  ERROR_MESSEAGE_MUST_IN_RANGE:
    '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  
    validateBridgeSize(bridgeSize) {
    if (bridgeSize >= 3 || bridgeSize <= 20) {
      throw new Error(Validator.ERROR_MESSEAGE_MUST_IN_RANGE);
    }
  },
};

module.exports = Validator;
