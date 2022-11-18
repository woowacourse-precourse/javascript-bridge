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

  static nextStep() {
    if (Validation.isStringEmpty(value)) {
        Console.close();
        throw new Error('[ERROR] 값을 입력해주세요.');
    }

    if (!Validation.oneValue(value)) {
        Console.close();
        throw new Error('[ERROR] 1개의 값을 입력해주세요.');
    }

    if (!Validation.onlyTwoValue(value)) {
        Console.close();
        throw new Error('[ERROR] U 또는 D를 입력해주세요.');
    }
  }

  static retry() {

  }

  static onlyTwoValue(value) {
    return value === 'U' || value === 'D'
  }

  static oneValue(value) {
    return value.length === 1;
  }

  static isStringEmpty(value) {
    return value.length === 0;
  }

  static isEmpty(number) {
    return number.toString().length === 0;
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
