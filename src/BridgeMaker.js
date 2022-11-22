const BridgeMaker = {

  makeBridge(size, generateRandomNumber) {
    const makedBridge = [];
    for (let i = 0; i < size; i++) {
      const number = generateRandomNumber();
      if (number == 1) makedBridge.push('U');
      if (number == 0) makedBridge.push('D');
    }
    return makedBridge;
  },
};

module.exports = BridgeMaker;
