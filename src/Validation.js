const Validation = {
  BRIDGE_SIZE_ERROR_MSG: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",

  validateBridgeSize(bridgeSize) {
    const isNumber = !Number.isNaN(bridgeSize);
    const isValidRange = 3 <= bridgeSize && bridgeSize <= 20;
    const isValid = isNumber && isValidRange;
    console.log(bridgeSize);

    if (!isValid) {
      throw new Error(Validation.BRIDGE_SIZE_ERROR_MSG);
    }
  },
};

module.exports = Validation;
