const { CHECK, ERROR_MESSAGE } = require('../constants/constant.js');

const Validator = {
  validateBridge(size) {
    if (CHECK.BRIDGE_LENGTH(size)) throw Error(ERROR_MESSAGE.BRIDGE_SIZE);
  },

  validateDirect(direction) {
    if (CHECK.DIRECTION(direction)) throw Error(ERROR_MESSAGE.DIRECTION);
  },

  validateReInput(input) {
    if (CHECK.RESTART(input)) throw Error(ERROR_MESSAGE.RESTART_INPUT);
  }
}

module.exports = Validator;