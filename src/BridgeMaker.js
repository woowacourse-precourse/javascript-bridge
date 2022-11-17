const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => (generateRandomNumber() ? 'U' : 'D'));
  },
};

module.exports = BridgeMaker;
