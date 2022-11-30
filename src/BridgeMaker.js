const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      const number = generateRandomNumber();

      if (number === 0) bridge.push("D");
      if (number === 1) bridge.push("U");
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
