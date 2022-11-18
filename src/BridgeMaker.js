const { BRIDGE_GAME } = require('./constants/values');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () =>
      generateRandomNumber() === BRIDGE_GAME.ONE_STRING ? BRIDGE_GAME.INPUT_U : BRIDGE_GAME.INPUT_D
    );
  },
};

module.exports = BridgeMaker;
