const { UP_DOWN } = require('./utiles/Constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      bridge.push(String(generateRandomNumber()) === '1' ? UP_DOWN.up : UP_DOWN.down);
    };
    return bridge;
  },
};

module.exports = BridgeMaker;
