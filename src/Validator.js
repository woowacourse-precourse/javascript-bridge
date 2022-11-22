const { Console } = require('@woowacourse/mission-utils');
const { REGEXP, ERROR_MESSAGE } = require('./constant/constant');

class Validator {
  sizeValidate(size) {
    try {
      this.checkNumber(size);
      this.checkStartNumber(size);
      this.checkSizeRange(size);
    } catch (error) {
      Console.print(error);
      return false;
    }
  }

  checkNumber(size) {
    if (!REGEXP.CHECK_NUMBER.test(size)) {
      throw new Error(ERROR_MESSAGE.INVALID_SIZE_NUMBER);
    }
  }

  checkStartNumber(size) {
    if (REGEXP.CHECK_START_NUMBER.test(size)) {
      throw new Error(ERROR_MESSAGE.START_ZERO);
    }
  }

  checkSizeRange(size) {
    if (parseInt(size, 10) < 3 || parseInt(size, 10) > 20) {
      throw new Error(ERROR_MESSAGE.INVALID_SIZE_RANGE);
    }
  }
}

module.exports = Validator;
