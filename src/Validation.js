const Validation = {
  validateIsNumber(number) {
    if (/\D/.test(number)) {
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }
  },
};

module.exports = Validation;
