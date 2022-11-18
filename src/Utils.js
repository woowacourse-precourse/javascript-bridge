const { Console } = require('@woowacourse/mission-utils');
const { ERROR, RULE } = require('./Constants');

const throwErrorMessage = (message) => {
  throw new Error(`${ERROR.PREFIX} ${message}`);
};

const checkIsInteger = (input) => {
  const inputToNumberFormat = Number(input);
  if (!Number.isInteger(inputToNumberFormat)) {
    Console.close();
    throwErrorMessage(ERROR.NOT_INTEGER);
  }
};

const checkSizeInRange = (size) => {
  if (size < RULE.MIN_SIZE || size > RULE.MAX_SIZE) {
    Console.close();
    throwErrorMessage(ERROR.NOT_IN_RANGE);
  }
};

module.exports = { checkIsInteger, checkSizeInRange };
