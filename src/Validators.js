const { ERROR_MESSAGE, MOVE, COMMAND } = require('./utils/constants');

const Validators = {
  isValidLength: (length) => {
    if (!length) throw new Error(ERROR_MESSAGE.EMPTY_SIZE);
    if (Number(length) < 3 || Number(length > 20) || isNaN(length))
      throw new Error(ERROR_MESSAGE.INVALID_SIZE);
  },
  isValidMove: (move) => {
    if (!move) throw new Error(ERROR_MESSAGE.EMPTY_MOVE);
    if (move !== MOVE.UP && move !== MOVE.DOWN)
      throw new Error(ERROR_MESSAGE.INVALID_MOVE);
  },
  isValidCommand: (command) => {
    if (!command) throw new Error(ERROR_MESSAGE.EMPTY_COMMAND);
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT)
      throw new Error(ERROR_MESSAGE.INVALID_COMMAND);
  },
};

module.exports = Validators;
