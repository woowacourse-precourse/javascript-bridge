class Validator {
  static isNotANumber(input) {
    if (isNaN(input)) {
      throw new Error("다리 개수는 숫자로 입력하셔야 합니다.");
      return true;
    }
    return false;
  }

  static isRangeIn(start, end, input) {
    if (start > input || input < end) {
      throw new Error("3부터 20사이의 숫자만 입력하셔야 합니다.");
      return false;
    }
    return true;
  }
}

module.exports = Validator;
