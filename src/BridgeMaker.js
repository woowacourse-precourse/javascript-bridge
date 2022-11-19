const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      return String(generateRandomNumber()) === '1' ? 'U' : 'D';
    });
  },
};

module.exports = BridgeMaker;
