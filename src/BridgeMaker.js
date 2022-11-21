const { BRIDGE } = require("./utils/constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = Array.from({ length: size });
    return bridge.map(() =>
      generateRandomNumber() === BRIDGE.ZERO ? BRIDGE.DOWN : BRIDGE.UP,
    );
  },
};

module.exports = BridgeMaker;
