const { BRIDGE_UP, BRIDGE_DOWN } = require("./Utils");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = Array.from({ length: size }, () => {
      const number = generateRandomNumber();
      if (number) return BRIDGE_UP;
      return BRIDGE_DOWN;
    });
    return bridge;
  },
};

module.exports = BridgeMaker;
