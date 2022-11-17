const Validation = {
  VALIDATION_NUMBER_TEXT: '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.',
  RANGE_ERROR_TEXT: '[ERROR] 지정한 범위의 값이 아닙니다.',
  FUNCTION_ERROR_TEXT: '[ERROR] 전달된 인수는 함수가 아닙니다.',

  throwError(errorMessage) {
    throw new Error(errorMessage);
  },

  number(target) {
    if (Number.isNaN(target) || typeof target !== 'number') {
      throw new TypeError(Validation.VALIDATION_NUMBER_TEXT);
    }
  },

  func(target) {
    if (typeof target !== 'function') {
      throw new TypeError(Validation.FUNCTION_ERROR_TEXT);
    }
  },

  range(start, end) {
    return function checkRange(target) {
      Validation.number(target);

      if (target < start || target > end) {
        throw new TypeError(Validation.RANGE_ERROR_TEXT);
      }
    };
  },
};

module.exports = Validation;
