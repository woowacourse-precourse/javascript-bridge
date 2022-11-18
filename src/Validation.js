const { Console } = require('@woowacourse/mission-utils');

class Validation {
  static bridgeLength(number) {
    if (Validation.isEmpty(number)) {
        Console.close();
        throw new Error('[ERROR] 값을 입력해주세요.'); 
    }

    if (!Validation.isNumber(number)) {
        Console.close();
        throw new Error('[ERROR] 숫자를 입력해주세요.')
    }

    if (!Validation.numberNet(number)) {
        Console.close();
        throw new Error('[ERROR] 3과 20사이의 값을 입력해주세요.');
    }
  }

  static isEmpty(number) {
    return number.length === 0;
  }

  static numberNet(number) {
    return number > 2 && number < 21;
  }

  static isNumber(number) {
    const RegExp = /^[0-9]+$/;
    return RegExp.test(number);
  }
}

module.exports = Validation;
