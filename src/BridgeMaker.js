const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      return generateRandomNumber() === 1 ? 'U' : 'D';
    });
  },
};

module.exports = BridgeMaker;
