const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./Constants');

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
    if (Number.isNaN(parseInt(input, 10))) {
      throw ERROR_MESSAGE.IS_NOT_NUMBER;
    }
  },
  isNotInRange(input) {
    if (input < 3 || input > 20) {
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
  validateRetryComment(retryComment) {
    try {
      this.isRightRetryComment(retryComment);
    } catch (error) {
      Console.print(error);
      return false;
    }
    return true;
  },
  isRightRetryComment(retryComment) {
    if (retryComment !== 'R' && retryComment !== 'Q') {
      throw ERROR_MESSAGE.IS_WRONG_RETRY_COMMENT;
    }
  },
};

module.exports = Validation;
