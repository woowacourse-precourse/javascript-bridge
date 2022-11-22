const { Console } = require('@woowacourse/mission-utils');
const { REGEXP, ERROR_MESSAGE, BRIDGE } = require('./constant/constant');

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

  moveValidate(moving) {
    try {
      this.checkMoveValue(moving);
    } catch (error) {
      Console.print(error);
      return false;
    }

    return true;
  }

  commandValidate(command) {
    try {
      this.checkTryValue(command);
    } catch (error) {
      Console.print(error);
      return false;
    }

    return true;
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

  checkMoveValue(moving) {
    if (moving !== BRIDGE.STRING_UP && moving !== BRIDGE.STRING_DOWN) {
      throw new Error(ERROR_MESSAGE.INVALID_MOVE_VALUE);
    }
  }

  checkTryValue(command) {
    if (command !== BRIDGE.RESTART && command !== BRIDGE.QUIT) {
      throw new Error(ERROR_MESSAGE.INVALID_TRY_VALUE);
    }
  }
}

module.exports = Validator;
