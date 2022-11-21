const { UP, DOWN } = require('../contants/Options');

const BridgeGameValidator = {
  validateBridgeSize(size) {
    if (size < 3 || size > 20) {
      throw new Error('[ERROR] 다리 크기로 3이상 20 이하의 값만 가능합니다.');
    }
  },
  validateMove(char) {
    if (char !== UP && char !== DOWN) {
      throw new Error(
        `[ERROR] 다리 게임의 유효한 선택값은 "${UP}" 혹은 "${DOWN}"입니다.`
      );
    }
  },
};

module.exports = BridgeGameValidator;
