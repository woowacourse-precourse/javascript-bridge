const { ErrorMsg } = require('./Constant.js');

const Validation = {
  validateBridgeSize(size) {
    if (Number.isNaN(size)) {
      throw new Error(ErrorMsg.INVALID_INPUT_NOT_NUM);
    }
    if (size < 3 || size > 20) {
      throw new Error(ErrorMsg.INVALID_INPUT_BRIDGE_SIZE_RANGE);
    }
  },

  validateMoving(direction) {
    if (['U', 'D'].includes(direction) === false) {
      throw new Error(ErrorMsg.INVALID_INPUT_MOVING);
    }
  },

  validateGameCommand(command) {
    if (['R', 'Q'].includes(command) === false) {
      throw new Error(ErrorMsg.INVALID_INPUT_GAME_COMMAND);
    }
  },
};

module.exports = Validation;
