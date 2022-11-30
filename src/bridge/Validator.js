const { CHECK, ERROR_MSG } = require('../constants/Constant.js');

const Validator = {
  validateBridgeSize(size) {
    if (CHECK.BRIDGE_SIZE(size)) throw Error(ERROR_MSG.INVALID_BRIDGE_SIZE);
  },

  validateDirection(direction) {
    if (CHECK.DIRECTION_INPUT(direction)) throw Error(ERROR_MSG.INVALID_CELL_DIRECTION);
  },

  validateRestartInput(input) {
    if (CHECK.RESTART_INPUT(input)) throw Error(ERROR_MSG.INVALID_RESTART_INPUT);
  }
}

module.exports = Validator;