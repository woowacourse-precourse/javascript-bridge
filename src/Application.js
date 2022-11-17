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
};

module.exports = Application;
