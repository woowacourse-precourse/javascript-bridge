const {
  ERROR_MESSAGE,
  DIRECTION,
  COMMAND_OPTION,
  BRIDGE_SIZE,
} = require("./Const");

const Validation = {
  checkBridgeSize(size) {
    if (isNaN(size)) return { errorMsg: ERROR_MESSAGE.number };

    if (!this.isValidSizeRange(size)) return { errorMsg: ERROR_MESSAGE.range };

    if (!this.isInteger(size)) return { errorMsg: ERROR_MESSAGE.integer };

    return { errorMsg: undefined };
  },

  isValidSizeRange(size) {
    return size >= BRIDGE_SIZE.min && size <= BRIDGE_SIZE.max;
  },

  isInteger(size) {
    return Number.isInteger(Number(size));
  },

  checkDirection(direction) {
    if (this.isValidDirection(direction)) return { errorMsg: undefined };

    return { errorMsg: ERROR_MESSAGE.direction };
  },

  isValidDirection(direction) {
    return direction === DIRECTION.up || direction === DIRECTION.down;
  },

  checkCommandOption(commandOption) {
    if (this.isValidCommandOption(commandOption))
      return { errorMsg: undefined };

    return { errorMsg: ERROR_MESSAGE.commandOption };
  },

  isValidCommandOption(commandOption) {
    return (
      commandOption === COMMAND_OPTION.restart ||
      commandOption === COMMAND_OPTION.quit
    );
  },
};
module.exports = Validation;
