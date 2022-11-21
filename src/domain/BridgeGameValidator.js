const BridgeGameValidator = {
  validateMove(char) {
    if (char !== 'U' && char !== 'D') {
      throw new Error(
        '[ERROR] 다리 게임의 유효한 선택값은 "U" 혹은 "D"입니다.'
      );
    }
  },
};

module.exports = BridgeGameValidator;
