const InputValidation = {
  isBridgeSizeInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) throw new Error('[ERROR] 다리의 길이는 정수만 입력이 가능합니다.');
  },
  isBridgeSizeInRange(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) throw new Error('[ERROR] 다리의 길이는 3 이상 20 이하의 숫자만 입력이 가능합니다.');
  },
  isMovementAvailable(movement) {
    if (movement !== 'U' && movement !== 'D') throw new Error('[ERROR] 이동할 칸은 U 또는 D만 입력이 가능합니다.');
  },
};

module.exports = InputValidation;
