const Validation = require('./Validation');

const Application = {
  convertNumber(target) {
    const DECIMAL_NUMBER = 10;
    const result = parseInt(target, DECIMAL_NUMBER);

    Validation.number(result);

    return result;
  },

  checkRangeThreeToTwenty(target) {
    const START = 3;
    const END = 20;
    const checkRange = Validation.range(START, END);

    checkRange(target);
  },

  createArray(target, mapFn) {
    const { convertNumber, checkRangeThreeToTwenty } = Application;
    const userLength = convertNumber(target);

    checkRangeThreeToTwenty(userLength);
    Validation.func(mapFn);

    return Array.from({ length: userLength }, mapFn);
  },

  copyArray(target) {
    Validation.array(target);

    return [...target];
  },

  hasContain(criterions) {
    const copiedCriterions = this.copyArray(criterions);

    return function isContain(target) {
      if (!copiedCriterions.includes(target)) {
        Validation.throwError(Validation.RANGE_ERROR_TEXT);
      }
    };
  },

  replace(target, item1, item2) {
    const [COMPARISON_TARGET_1, RETURN_TARGET_1] = item1;
    const [COMPARISON_TARGET_2, RETURN_TARGET_2] = item2;

    if (target === COMPARISON_TARGET_1) return RETURN_TARGET_1;
    if (target === COMPARISON_TARGET_2) return RETURN_TARGET_2;

    return Validation.throwError(Validation.RANGE_ERROR_TEXT);
  },

  getArrayLength(target) {
    Validation.array(target);

    return target.length;
  },

  extractArrayRange(target, begin, end) {
    Validation.array(target);
    Validation.number(begin);
    Validation.number(end);

    return target.slice(begin, end);
  },
};

module.exports = Application;
