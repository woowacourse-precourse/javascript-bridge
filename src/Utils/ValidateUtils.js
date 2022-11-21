const { ERROR, RULE, DIRECTION, IS_RETRY } = require('./Constants');

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
  const directionList = Object.values(DIRECTION);
  if (!directionList.includes(direction)) {
    throwErrorMessage(ERROR.NOT_POSSIBLE_DIRECTION);
  }
};

const checkPossibleCommand = (command) => {
  const commandList = Object.values(IS_RETRY);
  if (!commandList.includes(command)) {
    throwErrorMessage(ERROR.NOT_POSSIBLE_COMMAND);
  }
};

module.exports = { checkIsInteger, checkSizeInRange, checkPossibleDirection, checkPossibleCommand };
