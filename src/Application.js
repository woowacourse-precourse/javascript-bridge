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

    return checkRange(target);
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
};

module.exports = Application;
