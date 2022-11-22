const ErrorForm = require('../../contants/ErrorForm');

const InputTypeValidator = {
  isInteger(value) {
    if (!Number.isInteger(Number(value))) {
      throw new Error(ErrorForm('입력값은 정수 값이어야 합니다.'));
    }
  },
  isChar(value) {
    if (typeof value !== 'string' || value.length !== 1) {
      throw new Error(ErrorForm('입력값은 하나의 문자여야 합니다.'));
    }
  },
};

module.exports = InputTypeValidator;
