const Validator = {
  ERROR_MESSEAGE_MUST_IN_RANGE:
    "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  ERROR_MESSEAGE_MUST_BE_NUMBER: "[ERROR] 다리 길이는 숫자여야 합니다.",
  ERROR_MESSEAGE_MUST_U_OR_D: "[ERROR] U 또는 D만 입력 가능합니다.",
  ERROR_MESSEAGE_MUST_R_OR_Q: "[ERROR] R 또는 Q만 입력 가능합니다.",
  BRIDGE_LOWER_INCLUSIVE: 3,
  BRIDGE_UPPER_INCLUSIVE: 20,
  MOVE_UPSIDE_STRING: "U",
  MOVE_DOWNSIDE_STRING: "D",
  RETRY_STRING: "R",
  EXIT_STRING: "Q",

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
    if (bridgeSize < Validator.BRIDGE_LOWER_INCLUSIVE || bridgeSize > Validator.BRIDGE_UPPER_INCLUSIVE) {
      throw new Error(Validator.ERROR_MESSEAGE_MUST_IN_RANGE);
    }
  },

  validateDirection(direction) {
    if (direction !== Validator.MOVE_UPSIDE_STRING || direction !== Validator.MOVE_DOWNSIDE_STRING) {
      throw new Error(Validator.ERROR_MESSEAGE_MUST_U_OR_D);
    }
  },

  validateRetryCommand(command) {
    if (command !== Validator.RETRY_STRING && command !== Validator.EXIT_STRING) {
      throw new Error(Validator.ERROR_MESSEAGE_MUST_R_OR_Q);
    }
  },
};

module.exports = Validator;
