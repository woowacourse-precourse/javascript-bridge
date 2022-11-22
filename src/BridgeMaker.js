const BridgeMaker = {

  makeBridge(size, generateRandomNumber) {
    const makedBridge = [];
    for (let i = 0; i < size; i++) {
      const num = generateRandomNumber();
      if (num == 1) makedBridge.push('U');
      if (num == 0) makedBridge.push('D');
    }
    return makedBridge;
  },
};

module.exports = BridgeMaker;
