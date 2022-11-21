const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let count = 0; count < size; count++){
      generateRandomNumber() ? bridge.push('U') : bridge.push('D');
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
