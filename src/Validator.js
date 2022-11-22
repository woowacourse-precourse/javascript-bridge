const { REGEX, BRIDGE, COMMAND } = require('./constant/Constant');

const Validator = {
  errorIfBridgeSizeInvalid(bridgeSize) {
    if (Validator.isBridgeSizeInvalid(bridgeSize)) {
      throw Error;
    }
  },

  errorIfMovingInvalid(moving) {
    if (Validator.isMovingInvalid(moving)) {
      throw Error;
    }
  },

  errorIfGameCommandInvalid(gameCommand) {
    if (Validator.isGameCommandInvalid(gameCommand)) {
      throw Error;
    }
  },

  isBridgeSizeInvalid(bridgeSize) {
    return (
      !REGEX.IS_NUMBER.test(bridgeSize) ||
      Number(bridgeSize) < BRIDGE.MIN_SIZE ||
      Number(bridgeSize) > BRIDGE.MAX_SIZE
    );
  },

  isMovingInvalid(moving) {
    return moving !== COMMAND.MOVING_UP && moving !== COMMAND.MOVING_DOWN;
  },

  isGameCommandInvalid(gameCommand) {
    return gameCommand !== COMMAND.RETRY && gameCommand !== COMMAND.QUIT;
  },
};

module.exports = Validator;
