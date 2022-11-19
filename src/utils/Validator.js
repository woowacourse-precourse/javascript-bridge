const { ErrorMsg } = require('../constants/Constant.js');

class Validator {
  static #nullCheck(value) {
    if (value === '' || value === undefined || value === null) {
      throw new Error(ErrorMsg.INVALID_INPUT_NULL);
    }
  }

  static validateBridgeSize(size) {
    this.#nullCheck(size);
    if (Number.isNaN(+size)) {
      throw new TypeError(ErrorMsg.INVALID_INPUT_NOT_NUM);
    }
    if (+size < 3 || +size > 20) {
      throw new RangeError(ErrorMsg.INVALID_INPUT_BRIDGE_SIZE_RANGE);
    }
  }

  static validateMoving(direction) {
    this.#nullCheck(direction);
    if (['U', 'D'].includes(direction) === false) {
      throw new RangeError(ErrorMsg.INVALID_INPUT_MOVING);
    }
  }

  static validateGameCommand(command) {
    this.#nullCheck(command);
    if (['R', 'Q'].includes(command) === false) {
      throw new RangeError(ErrorMsg.INVALID_INPUT_GAME_COMMAND);
    }
  }
}

module.exports = Validator;
