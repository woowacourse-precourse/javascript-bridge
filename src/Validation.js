const { Console } = require('@woowacourse/mission-utils');
const { printNewLine } = require('./OutputView');

class Validation {
  static showErrorMessage(message) {
    try {
      throw new Error(message);
    } catch (e) {
      Console.print(e.message);
      return false;
    }
  }

  static checkBridgeSize(size) {
    const regExp = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;
    if (!regExp.test(size)) {
      printNewLine();
      return Validation.showErrorMessage('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    return true;
  }

  static checkRoundInput(input) {
    const regExp = /U|D/;
    if (!regExp.test(input)) {
      printNewLine();
      Validation.showErrorMessage('[ERROR] 입력값은 문자 "U"이거나 "D"여야 합니다.');
    }
  }

  static checkRetryInput(input) {
    const regExp = /R|Q/;
    if (!regExp.test(input)) {
      printNewLine();
      Validation.showErrorMessage('[ERROR] 입력값은 문자 "R"이거나 "Q"여야 합니다.');
    }
  }
}

module.exports = Validation;
