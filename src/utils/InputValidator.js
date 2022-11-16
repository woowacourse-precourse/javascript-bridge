const InputValidator = {
  validateEmpty(input) {
    if (input === '') {
      throw new Error('[ERROR] 빈 값을 입력했습니다.');
    }
  },

  validateSpace(input) {
    if (input.includes(' ')) {
      throw new Error('[ERROR] 공백을 포함해 입력했습니다.');
    }
  },

  validateNumber(input) {
    if (isNaN(input)) {
      throw new Error('[ERROR] 입력 값은 숫자여야 합니다.');
    }
  },
};

module.exports = InputValidator;
