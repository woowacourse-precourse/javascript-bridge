const { DOWNSIDE_SYMBOL_NUM, DOWNSIDE_SYMBOL, UPSIDE_SYMBOL } = require('./constants/condition.js');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      // ApplicationTest 테스트 코드 문자열로 주어짐... -->  ["1", "0", "0"];
      const randomNum = String(generateRandomNumber());

      if (randomNum === String(DOWNSIDE_SYMBOL_NUM)) return DOWNSIDE_SYMBOL;

      return UPSIDE_SYMBOL;
    });
  },
};

module.exports = BridgeMaker;
