const { CONDITION } = require('./utils/constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    for (let idx = 0; idx < size; idx++) {
      const randomNumber = generateRandomNumber();
      bridge.push(randomNumber ? CONDITION.UP : CONDITION.DOWN);
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
