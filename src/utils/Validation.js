const Validation = {
  isNotNumber(input) {
    if (isNaN(input)) throw new Error("[ERROR] 길이는 숫자만 입력 가능합니다.");
  },

  isInRange(input) {
    if (input < 3 || input > 20)
      throw new Error("[ERROR] 길이는 3이상 20이하여야 합니다.");
  },
  validateBridgeSize(input) {
    this.isNotNumber(input);
    this.isInRange(input);
  },

  validateUserInput(input) {
    if (input !== "R" || input !== "Q")
      throw new Error("[ERROR] R 혹은 Q만 입력할 수 있습니다.");
  },
};

module.exports = Validation;
