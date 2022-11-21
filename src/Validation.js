const { ERROR_MESSAGE } = require('./Constants');
const { Console } = require('@woowacourse/mission-utils');

const Validation = {
  validateBridgeSize(size) {
    try {
      this.isInputNumber(size);
      this.isNotInRange(size);
    } catch (error) {
      Console.print(error);
      return false;
    }
    return true;
  },
  isInputNumber(input) {
    if (Number.isNaN(parseInt(input))) {
      throw ERROR_MESSAGE.IS_NOT_NUMBER;
    }
  },
  isNotInRange(input) {
    if (3 > input || input > 20) {
      throw ERROR_MESSAGE.IS_NOT_IN_RANGE;
    }
  },
  validateDirection(direction) {
    try {
      this.isRightDirection(direction);
    } catch (error) {
      Console.print(error);
      return false;
    }
    return true;
  },
  isRightDirection(direction) {
    if (direction !== 'U' && direction !== 'D') {
      throw ERROR_MESSAGE.IS_WRONG_DIRECTION;
    }
  },
};

module.exports = Validation;
