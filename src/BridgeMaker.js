const { RANDOM_UPPER_INCLUSIVE } = require('./BridgeRandomNumberGenerator');
const COMMAND = require('./constants/Command');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      bridge.push(
        generateRandomNumber() === RANDOM_UPPER_INCLUSIVE
          ? COMMAND.MOVE_UP
          : COMMAND.MOVE_DOWN
      );
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
