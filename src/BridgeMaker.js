const { DIRECTION } = require("./utils/constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const { UP, DOWN } = DIRECTION;
    let bridge = [];

    Array.from({ length: size }).forEach(() => {
      bridge = [...bridge, generateRandomNumber() === 1 ? UP : DOWN];
    });

    return bridge;
  },
};

module.exports = BridgeMaker;
