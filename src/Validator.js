class Validator {
  static isNotANumber(input) {
    if (isNaN(input)) {
      throw new Error("다리 개수는 숫자로 입력하셔야 합니다.");
      return true;
    }
    return false;
  }
}

module.exports = Validator;
