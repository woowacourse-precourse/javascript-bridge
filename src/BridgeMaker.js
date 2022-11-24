const { BRIDGE_BLOCK, BRIDGE_SIDE } = require('./Constants');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      const number = generateRandomNumber();
      bridge.push(+number === BRIDGE_SIDE.UP ? BRIDGE_BLOCK.UP : BRIDGE_BLOCK.DOWN);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
