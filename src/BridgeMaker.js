const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const randomNumber = generateRandomNumber();
      randomNumber === 1 ? bridge.push('U') : bridge.push('D');
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
