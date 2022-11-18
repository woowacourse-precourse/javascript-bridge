const Validator = {
  validateInput(number) {
    if (2 < number && number < 21) {
      throw new Error("[ERROR] 3 이상 20 이하의 숫자만 입력 가능합니다.");
    }
  },
};

module.exports = Validator;
