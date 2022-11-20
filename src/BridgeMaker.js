const { MOVING } = require("./constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    while (bridge.length < size) {
      const number = Number(generateRandomNumber());
      const block = number ? MOVING.UP : MOVING.DOWN;
      bridge.push(block);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
