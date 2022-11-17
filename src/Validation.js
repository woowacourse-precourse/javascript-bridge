const Validation = {
  VALIDATION_NUMBER_TEXT: '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.',
  number(target) {
    if (Number.isNaN(target)) {
      throw new TypeError(Validation.VALIDATION_NUMBER_TEXT);
    }
  },
};

module.exports = Validation;
