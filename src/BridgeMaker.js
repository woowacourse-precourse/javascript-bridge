const { UP, DOWN } = require('./utiles/Constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      bridge.push(generateRandomNumber() === '1' ? UP : DOWN);
    };
    return bridge;
  },
};

module.exports = BridgeMaker;
