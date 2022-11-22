const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => 
      generateRandomNumber() === 1 ? 'U' : 'D'
    );
  },
};

module.exports = BridgeMaker;
