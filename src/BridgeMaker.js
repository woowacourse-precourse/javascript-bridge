const { DIRECTION } = require('./constant/Constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];

    while (bridge.length < size) {
      bridge.push(generateRandomNumber());
    }
    return bridge.map((num) => DIRECTION[num]);
  },
};

module.exports = BridgeMaker;
