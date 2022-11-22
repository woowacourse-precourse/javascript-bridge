const { UP, DOWN } = require("./lib/constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    while (bridge.length < size) {
      const randomNumber = generateRandomNumber();
      randomNumber === 0 ? bridge.push(DOWN) : bridge.push(UP);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
