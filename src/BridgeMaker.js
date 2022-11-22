const { BRIDGE } = require('./constants/Constants');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const step = Number(generateRandomNumber());
      step ? bridge.push(BRIDGE.up) : bridge.push(BRIDGE.down);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
