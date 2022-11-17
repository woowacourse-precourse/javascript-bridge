const BridgeMaker = {

  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      const random = generateRandomNumber();
      if (Number(random) === 1) bridge.push('U');
      if (Number(random) === 0) bridge.push('D');
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
