const { DOWNSIDE_SYMBOL_NUM, DOWNSIDE_SYMBOL, UPSIDE_SYMBOL } = require('./constants/condition.js');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      const randomNum = generateRandomNumber();

      if (randomNum === DOWNSIDE_SYMBOL_NUM) return DOWNSIDE_SYMBOL;

      return UPSIDE_SYMBOL;
    });
  },
};

module.exports = BridgeMaker;
