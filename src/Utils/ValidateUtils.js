const { ERROR, RULE, COMMAND, IS_RETRY } = require('./Constants');

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

const checkPossibleDirection = (direction) => {
  const directionList = Object.values(COMMAND);
  if (!directionList.includes(direction)) {
    throwErrorMessage(ERROR.NOT_POSSIBLE_COMMAND);
  }
};

const checkHasKey = (key) => {
  const commandList = Object.values(IS_RETRY);
  if (!commandList.includes(key)) {
    throwErrorMessage(ERROR.NOT_KEY);
  }
};

module.exports = { checkIsInteger, checkSizeInRange, checkPossibleDirection, checkHasKey };
