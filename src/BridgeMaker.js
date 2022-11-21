const { BRIDGE } = require('./constant/Bridge');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const space = generateRandomNumber() == BRIDGE.LOWER ? BRIDGE.DOWN : BRIDGE.UP;
      bridge.push(space);
    }
    return bridge;
  }
};

module.exports = BridgeMaker;
