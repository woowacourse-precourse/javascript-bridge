const upDownMap = {
  0: 'D',
  1: 'U'
};

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => generateRandomNumber())
      .map((zeroOrOne) => this.randomNumberToUpAndDown(zeroOrOne));
  },

  randomNumberToUpAndDown(number) {
    return upDownMap[number];
  }
};

module.exports = BridgeMaker;
