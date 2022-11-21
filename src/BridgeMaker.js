const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    const UP_DOWN = ['D', 'U'];

    for (let i = 0; i < size; ++i) {
      bridge.push(UP_DOWN[generateRandomNumber()]);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
