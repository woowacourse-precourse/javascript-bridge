const COMMAND = require('../constants/command');
const ERROR_MESSAGE = require('../constants/error message');
const NUMBER = require('../constants/number');
const ErrorCatcher = require('./ErrorCatcher');

class Validate {
  static validateNumberType(input) {
    const notNumberReg = /[^0-9]/;

    if (notNumberReg.test(input)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  static validateBridgeSize(input) {
    if (input < NUMBER.MIN || input > NUMBER.MAX) {
      throw new Error(ERROR_MESSAGE.SIZE_ERROR);
    }
  }

  static validateMoveInput(input) {
    const validInputs = [COMMAND.UP, COMMAND.DOWN];

    if (!validInputs.includes(input)) {
      throw new Error(ERROR_MESSAGE.MOVE_RROR);
    }
  }

  static validateGameCommand(input) {
    const validRestarts = [COMMAND.REPLAY, COMMAND.QUIT];

    if (!validRestarts.includes(input)) {
      throw new Error(ERROR_MESSAGE.RETRY_ERROR);
    }
  }

  static bridgeSize(input) {
    return (
      ErrorCatcher.catch(this.validateBridgeSize, input) &&
      ErrorCatcher.catch(this.validateNumberType, input)
    );
  }

  static moveInput(input) {
    return ErrorCatcher.catch(this.validateMoveInput, input);
  }

  static gameCommand(input) {
    return ErrorCatcher.catch(this.validateGameCommand, input);
  }
}

module.exports = Validate;
