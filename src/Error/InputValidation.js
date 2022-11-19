const { ERROR_MESSAGE } = require('../constants/Messages');
const exceptionHandler = require('./ExceptionHandler');

class InputValidation {
  static isValidBridgeSize(size) {
    const regExp = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;
    if (!regExp.test(size)) {
      return exceptionHandler(ERROR_MESSAGE.bridge_size);
    }
    return true;
  }

  static isValidRound(input) {
    const regExp = /U|D/;
    if (!regExp.test(input)) {
      return exceptionHandler(ERROR_MESSAGE.moving);
    }
    return true;
  }

  static isValidRetry(input) {
    const regExp = /R|Q/;
    if (!regExp.test(input)) {
      return exceptionHandler(ERROR_MESSAGE.game_command);
    }
    return true;
  }
}

module.exports = InputValidation;
