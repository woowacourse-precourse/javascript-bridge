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

  static isMoveInputValidate(input) {
    if (input !== "U" || input !== "D") {
      throw new Error("이동할 칸은 U 또는 D로 입력하셔야 합니다.");
      return false;
    }
    return true;
  }

  static isRestartInputValidate(input) {
    if (input !== "R" || input !== "Q") {
      throw new Error("재시작 여부는 R 또는 Q로 입력하셔야 합니다.");
      return false;
    }
    return true;
  }
}

module.exports = Validator;
