const InputValidation = {
  isInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) throw new Error('[ERROR] 다리의 길이는 정수만 입력 가능합니다.');
  },
  isInRange(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) throw new Error('[ERROR] 다리의 길이는 3 이상 20 이하의 숫자만 입력 가능합니다.');
  },
};

module.exports = InputValidation;
