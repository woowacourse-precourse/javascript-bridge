const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const RESULT = [];
    for (let i = 0; i < size; i += 1) {
      const RANDOM = generateRandomNumber();
      RANDOM === 0 ? RESULT.push('D') : RESULT.push('U');
    }
    return RESULT;
  },
};

module.exports = BridgeMaker;
