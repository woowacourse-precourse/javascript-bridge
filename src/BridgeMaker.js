const { MOVING } = require("./constants/constant");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    while (bridge.length < size) {
      const number = Number(generateRandomNumber());
      const moving = number ? MOVING.UP : MOVING.DOWN;
      bridge.push(moving);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
