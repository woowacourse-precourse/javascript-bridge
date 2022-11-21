const { UP, DOWN } = require('../contants/Options');

const BridgeGameValidator = {
  validateMove(char) {
    if (char !== UP && char !== DOWN) {
      throw new Error(
        `[ERROR] 다리 게임의 유효한 선택값은 "${UP}" 혹은 "${DOWN}"입니다.`
      );
    }
  },
};

module.exports = BridgeGameValidator;
