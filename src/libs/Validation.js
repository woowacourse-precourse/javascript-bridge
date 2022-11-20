const {
  ERROR_MESSAGE,
  DIRECTION,
  BRIDGE_SIZE,
  COMMAND_OPTION,
} = require('./Constant');

const Validation = {
  checkBridgeSize(size) {
    if (isNaN(size)) return { errorMsg: ERROR_MESSAGE.number };

    if (size < BRIDGE_SIZE.min || size > BRIDGE_SIZE.max)
      return { errorMsg: ERROR_MESSAGE.range };

    if (!Number.isInteger(Number(size)))
      return { errorMsg: ERROR_MESSAGE.integer };

    return { errorMsg: undefined };
  },

  checkDirection(direction) {
    if (direction === DIRECTION.up || direction === DIRECTION.down)
      return { errorMsg: undefined };

    return { errorMsg: ERROR_MESSAGE.direction };
  },

  checkCommandOption(commandOption) {
    if (
      commandOption === COMMAND_OPTION.restart ||
      commandOption === COMMAND_OPTION.quit
    )
      return { errorMsg: undefined };

    return { errorMsg: ERROR_MESSAGE.commandOption };
  },
};

module.exports = Validation;
