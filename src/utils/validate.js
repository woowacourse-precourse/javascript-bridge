const { Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('./constants');

const validateBridge = (size) => {
  if (isNaN(size)) {
    Console.print(ERROR.NOT_A_NUMBER);
    throw new Error();
  }

  if (size < 3 || size > 20) {
    Console.print(ERROR.OUT_OF_RANGE);
    throw new Error();
  }
};

const validateMove = (move) => {
  if (/[^UD]/.test(move)) {
    Console.print(ERROR.WRONG_MOVE_INPUT);
    throw new Error();
  }
};

const validateRetry = (answer) => {
  if (/[^RQ]/.test(answer)) {
    Console.print(ERROR.WRONG_COMMAND);
    throw new Error();
  }
};

module.exports = { validateBridge, validateMove, validateRetry };
