class Validator {
  static validateNumber(value) {
    const regExp = /[0-9]/g;
    const matchArr = value.match(regExp);
    if (!matchArr || matchArr.length !== value.length) {
      throw new Error('[ERROR] 다리 길이는 숫자를 입력해야 합니다.');
    }
  }

  static validateNumberInRange(value) {
    const num = parseInt(value, 10);
    if (num > 20 || num < 3) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  }
}

module.exports = Validator;
