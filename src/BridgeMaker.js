const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 1; i <= size; i++) {
      const number = generateRandomNumber();
      String(number) === '1' ? bridge.push('U') : bridge.push('D');
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
