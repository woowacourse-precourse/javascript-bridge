const { binaryToDirection } = require('./utils/util');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) bridge.push(generateRandomNumber());
    return bridge.map(binaryToDirection);
  },
};

module.exports = BridgeMaker;
