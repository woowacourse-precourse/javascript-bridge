const COMMAND = require('../../constants/command');
const ERROR_MESSAGE = require('../../constants/error message');
const OutputView = require('../View/OutputView');

class Exception {
  static validateNumberType(input) {
    const notNumberReg = /[^0-9]/;
    if (notNumberReg.test(input)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  static validateBridgeSize(input) {
    if (input < 3 || input > 20) {
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
      this.catchError(this.validateBridgeSize, input) &&
      this.catchError(this.validateNumberType, input)
    );
  }

  static moveInput(input) {
    return this.catchError(this.validateMoveInput, input);
  }

  static gameCommand(input) {
    return this.catchError(this.validateGameCommand, input);
  }

  static catchError(validateFunction, input) {
    let isValid = true;
    try {
      validateFunction(input);
    } catch (error) {
      OutputView.printError(error.message);
      isValid = false;
    }
    return isValid;
  }
}

module.exports = Exception;
