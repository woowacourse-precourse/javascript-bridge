const { ERROR_MESSAGE, DIRECTION, COMMAND_OPTION } = require("./const");

const Validation = {
  validateBridgeSize(size) {
    if (isNaN(size)) throw new Error(ERROR_MESSAGE.number);
    if (size < 3 || size > 20) throw new Error(ERROR_MESSAGE.range);
    if (!Number.isInteger(Number(size))) throw new Error(ERROR_MESSAGE.integer);
  },
  validateDirection(direction) {
    if (direction === DIRECTION.up || direction === DIRECTION.down) return;

    throw new Error(ERROR_MESSAGE.direction);
  },
  validateCommandOption(commandOption) {
    if (
      commandOption === COMMAND_OPTION.restart ||
      commandOption === COMMAND_OPTION.quit
    )
      return;
    throw new Error(ERROR_MESSAGE.commandOption);
  },
};
module.exports = Validation;
