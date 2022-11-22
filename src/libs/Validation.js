const {
  ERROR_MESSAGE,
  DIRECTION,
  COMMAND_OPTION,
  BRIDGE_SIZE,
} = require("./const");

const Validation = {
  validateBridgeSize(size) {
    if (isNaN(size)) return { errorMsg: ERROR_MESSAGE.number };
    if (size < BRIDGE_SIZE.min || size > BRIDGE_SIZE.max)
      return { errorMsg: ERROR_MESSAGE.range };

    if (!Number.isInteger(Number(size)))
      return { errorMsg: ERROR_MESSAGE.integer };

    return { errorMsg: undefined };
  },
  validateDirection(direction) {
    if (direction === DIRECTION.up || direction === DIRECTION.down)
      return { errorMsg: undefined };

    return { errorMsg: ERROR_MESSAGE.direction };
  },
  validateCommandOption(commandOption) {
    if (
      commandOption === COMMAND_OPTION.restart ||
      commandOption === COMMAND_OPTION.quit
    )
      return { errorMsg: undefined };

    return { errorMsg: ERROR_MESSAGE.commandOption };
  },
};
module.exports = Validation;
