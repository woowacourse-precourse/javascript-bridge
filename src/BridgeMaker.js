const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => (generateRandomNumber.generate() ? 'U' : 'D'));
  },
};

module.exports = BridgeMaker;
