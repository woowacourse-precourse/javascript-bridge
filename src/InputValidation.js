const { ERROR_MESSAGE } = require('./constants/Messages');

class InputValidation {
  static checkValidBridgeSize(size) {
    const regExp = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;
    if (!regExp.test(size)) {
      throw new Error(ERROR_MESSAGE.bridge_size);
    }
  }

  static checkValidRound(input) {
    const regExp = /U|D/;
    if (!regExp.test(input)) {
      throw new Error(ERROR_MESSAGE.moving);
    }
  }

  static checkValidRetry(input) {
    const regExp = /R|Q/;
    if (!regExp.test(input)) {
      throw new Error(ERROR_MESSAGE.game_command);
    }
  }
}

module.exports = InputValidation;
