const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      const number = generateRandomNumber();
      bridge.push(number);
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
