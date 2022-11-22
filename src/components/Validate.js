const NUMBER = require('../constants/number');
const COMMAND = require('../constants/command');
const ERROR_MESSAGE = require('../constants/error message');
const ErrorCatcher = require('./ErrorCatcher');

class Validate {
  static validateNumberType(input) {
    const notNumberReg = /[^0-9]/;

    if (notNumberReg.test(input)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  static validateSize(input) {
    if (input < NUMBER.MIN || input > NUMBER.MAX) {
      throw new Error(ERROR_MESSAGE.SIZE_ERROR);
    }
  }

  static validateDirection(input) {
    const validInputs = [COMMAND.UP, COMMAND.DOWN];

    if (!validInputs.includes(input)) {
      throw new Error(ERROR_MESSAGE.MOVE_RROR);
    }
  }

  static validateCommand(input) {
    const validCommands = [COMMAND.REPLAY, COMMAND.QUIT];

    if (!validCommands.includes(input)) {
      throw new Error(ERROR_MESSAGE.RETRY_ERROR);
    }
  }

  static bridgeSize(input) {
    return (
      ErrorCatcher.catch(this.validateSize, input) &&
      ErrorCatcher.catch(this.validateNumberType, input)
    );
  }

  static moveInput(input) {
    return ErrorCatcher.catch(this.validateDirection, input);
  }

  static gameCommand(input) {
    return ErrorCatcher.catch(this.validateCommand, input);
  }
}

module.exports = Validate;
