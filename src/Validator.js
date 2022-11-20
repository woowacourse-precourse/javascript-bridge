const { REGEX, BRIDGE, COMMAND } = require('./constant/Constant');

const Validator = {
  errorIfBridgeSizeInvalid(bridgeSize) {
    if (
      !REGEX.IS_NUMBER.test(bridgeSize) ||
      Number(bridgeSize) < BRIDGE.MIN_SIZE ||
      Number(bridgeSize) > BRIDGE.MAX_SIZE
    ) {
      throw Error;
    }
  },

  errorIfMovingInvalid(moving) {
    if (moving !== COMMAND.MOVING_UP && moving !== COMMAND.MOVING_DOWN) {
      throw Error;
    }
  },

  errorIfGameCommandInvalid(gameCommand) {
    if (gameCommand !== COMMAND.RETRY && gameCommand !== COMMAND.QUIT) {
      throw Error;
    }
  },
};

module.exports = Validator;
