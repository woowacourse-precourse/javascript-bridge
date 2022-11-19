const { Console } = require('@woowacourse/mission-utils');
const { printNewLine } = require('./view/OutputView');
const { ERROR_MESSAGE } = require('./constants/Messages');

class InputValidation {
  static showErrorMessage(message) {
    try {
      throw new Error(message);
    } catch (e) {
      Console.print(e.message);
      return false;
    }
  }

  static isValidBridgeSize(size) {
    const regExp = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;
    if (!regExp.test(size)) {
      printNewLine();
      return InputValidation.showErrorMessage(ERROR_MESSAGE.bridge_size);
    }
    return true;
  }

  static isValidRound(input) {
    const regExp = /U|D/;
    if (!regExp.test(input)) {
      printNewLine();
      return InputValidation.showErrorMessage(ERROR_MESSAGE.moving);
    }
    return true;
  }

  static isValidRetry(input) {
    const regExp = /R|Q/;
    if (!regExp.test(input)) {
      printNewLine();
      return InputValidation.showErrorMessage(ERROR_MESSAGE.game_command);
    }
    return true;
  }
}

module.exports = InputValidation;
