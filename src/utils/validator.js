const { throwError } = require('./error');
const { ERROR, LENGTH, MOVE, COMMAND } = require('../constants/bridge');

const Validator = {
  isVaildSize(number) {
    if (number >= LENGTH.MIN && number <= LENGTH.MAX) return;
    throwError(ERROR.NOT_VALID_SIZE);
  },

  isVaildMovingChar(char) {
    if (char === MOVE.UP || char === MOVE.DOWN) return;
    throwError(ERROR.NOT_VALID_MOVING_CHAR);
  },

  isVaildCommandChar(char) {
    if (char === COMMAND.RETRY || char === COMMAND.QUIT) return;
    throwError(ERROR.NOT_VALID_COMMAND_CHAR);
  },
};

module.exports = {
  Validator,
};
