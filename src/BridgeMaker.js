const { RANDOM_UPPER_INCLUSIVE } = require('./BridgeRandomNumberGenerator');
const COMMAND = require('./constants/Command');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      const random = generateRandomNumber();
      bridge.push(
        random === RANDOM_UPPER_INCLUSIVE ? COMMAND.UP : COMMAND.DOWN
      );
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
