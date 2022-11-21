const ERROR_MESSAGE = require('../../constants/error message');
const OutputView = require('../View/OutputView');

class Exception {
  static validateNumber(input) {
    const notNumberReg = /[^0-9]/;
    if (notNumberReg.test(input)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  static validateBridgeSize(input) {
    if (input < 3 || input > 20) {
      throw new Error(ERROR_MESSAGE.RANGE_ERROR);
    }
  }

  static validateMoveInput(input) {
    const validInputs = ['U', 'D'];
    if (!validInputs.includes(input)) {
      throw new Error(ERROR_MESSAGE.MOVE_RROR);
    }
  }

  static validateRestartInput(input) {
    const validRestarts = ['Q', 'R'];
    if (validRestarts.includes(input)) {
      throw new Error(ERROR_MESSAGE.RETRY_ERROR);
    }
  }

  // 동일하게 동작하는 이부분도 리팩토링 할 수 있을 것 같은데?
  static bridgeSize(input) {
    try {
      this.validateNumber(input);
      this.validateBridgeSize(input);
      return true;
    } catch (err) {
      OutputView.printError(err);
      return false;
    }
  }

  static moveInput(input) {
    try {
      this.validateMoveInput(input);
      return true;
    } catch (err) {
      OutputView.printError(err);
      return false;
    }
  }

  static restartInput(input) {
    try {
      this.validateRestartInput(input);
      return true;
    } catch (err) {
      OutputView.printError(err);
      return false;
    }
  }
}

module.exports = Exception;
