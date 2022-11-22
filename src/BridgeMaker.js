const ENABLED_SPACE = { 1: 'U', 0: 'D' };

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array(size)
      .fill()
      .map(() => ENABLED_SPACE[generateRandomNumber()]);
  },
};

module.exports = BridgeMaker;
