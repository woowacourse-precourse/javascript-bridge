class BridgeValidator {
  static isInRange(input, start, end) {
    if (input < start || input > end) {
      throw new Error("[ERROR] 3 이상 20이하의 숫자가 아닙니다.");
    }
  }

  static isNumber(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 아닙니다.");
    }
  }
}

module.exports = BridgeValidator;
