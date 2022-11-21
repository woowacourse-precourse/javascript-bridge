const { ErrorMsg } = require('../constants/Constant.js');

class Validator {
  static bridgeSize(size) {
    if (size === '' || size === undefined || size === null) {
      throw new Error(ErrorMsg.INVALID_INPUT_NULL);
    }
    if (Number.isNaN(+size)) {
      throw new TypeError(ErrorMsg.INVALID_INPUT_NOT_NUM);
    }
    if (+size < 3 || +size > 20) {
      throw new RangeError(ErrorMsg.INVALID_INPUT_BRIDGE_SIZE_RANGE);
    }
  }

  static moving(direction) {
    if (direction === '' || direction === undefined || direction === null) {
      throw new Error(ErrorMsg.INVALID_INPUT_NULL);
    }
    if (['U', 'D'].includes(direction) === false) {
      throw new RangeError(ErrorMsg.INVALID_INPUT_MOVING);
    }
  }

  static gameCommand(command) {
    if (command === '' || command === undefined || command === null) {
      throw new Error(ErrorMsg.INVALID_INPUT_NULL);
    }
    if (['R', 'Q'].includes(command) === false) {
      throw new RangeError(ErrorMsg.INVALID_INPUT_GAME_COMMAND);
    }
  }
}

module.exports = Validator;
