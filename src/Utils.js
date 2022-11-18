const { Console } = require('@woowacourse/mission-utils');
const { ERROR, RULE, POSITION } = require('./Constants');

const throwErrorMessage = (message) => {
  throw new Error(`${ERROR.PREFIX} ${message}`);
};

const checkIsInteger = (input) => {
  const inputToNumberFormat = Number(input);
  if (!Number.isInteger(inputToNumberFormat)) {
    throwErrorMessage(ERROR.NOT_INTEGER);
  }
};

const checkSizeInRange = (size) => {
  if (size < RULE.MIN_SIZE || size > RULE.MAX_SIZE) {
    throwErrorMessage(ERROR.NOT_IN_RANGE);
  }
};

const checkHasCrossibleKey = (key) => {
  const positionList = Object.values(POSITION);
  if (!positionList.includes(key)) {
    throwErrorMessage(ERROR.NOT_CROSSIBLE_KEY);
  }
};

module.exports = { checkIsInteger, checkSizeInRange, checkHasCrossibleKey };
