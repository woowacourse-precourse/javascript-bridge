const { BRIDGE } = require('./constants/Constants')

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    for (let idx = 0; idx < size; idx++) {
      const randomNumber = generateRandomNumber();
      randomNumber === 0 ? bridge.push(BRIDGE.DOWN) : bridge.push(BRIDGE.UP);
    }

    return bridge;
  }
};

module.exports = BridgeMaker;
