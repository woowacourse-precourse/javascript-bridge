const { throwError } = require('./error');
const { ERROR } = require('../constants/bridge');

const Validator = {
  isVaildSize(number) {
    if (number >= 3 && number <= 20) return;
    throwError(ERROR.NOT_VALID_SIZE);
  },

  isVaildMovingChar(char) {
    if (char === 'U' || char === 'D') return;
    throwError(ERROR.NOT_VALID_MOVING_CHAR);
  },
};

module.exports = {
  Validator,
};
