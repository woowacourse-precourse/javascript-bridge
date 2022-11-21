const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 1; i <= size; i++) {
      const number = String(generateRandomNumber());
      if (number === '1') bridge.push('U');
      else if (number === '0') bridge.push('D');
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
