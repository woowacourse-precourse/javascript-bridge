const Validator = {
  validateIsNumber(input) {
    if (!input.trim() || Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다');
    }
  },
};

module.exports = Validator;
