const Validator = {
  ERROR_MESSEAGE_MUST_IN_RANGE:
    "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  ERROR_MESSEAGE_MUST_BE_NUMBER: "[ERROR] 다리 길이는 숫자여야 합니다.",
  ERROR_MESSEAGE_MUST_U_OR_D: "[ERROR] U 또는 D만 입력 가능합니다.",

  validateBridgeSize(bridgeSizeString) {
    Validator.validateInputisNumber(bridgeSizeString);
    const bridgeSize = Number(bridgeSizeString);
    Validator.validateInputisInRange(bridgeSize);
  },

  validateInputisNumber(bridgeSizeString) {
    if (isNaN(bridgeSizeString)) {
      throw new Error(Validator.ERROR_MESSEAGE_MUST_BE_NUMBER);
    }
  },

  validateInputisInRange(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(Validator.ERROR_MESSEAGE_MUST_IN_RANGE);
    }
  },

  validateDirection(direction) {
    if (direction !== "U" && direction !== "D") {
      throw new Error(Validator.ERROR_MESSEAGE_MUST_U_OR_D);
    }
  },
};

module.exports = Validator;
