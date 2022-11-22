const { ERROR, RULE, DIRECTION, COMMAND } = require('./Constants');

const throwErrorMessage = (message) => {
  throw new Error(`${ERROR.PREFIX} ${message}`);
};

const checkIncludeBlank = (input) => {
  if (input.includes(' ')) {
    throwErrorMessage(ERROR.INCLUDED_BLANK);
  }
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
  const commandList = Object.values(COMMAND);
  if (!commandList.includes(command)) {
    throwErrorMessage(ERROR.NOT_POSSIBLE_COMMAND);
  }
};

module.exports = { checkIncludeBlank, checkIsInteger, checkSizeInRange, checkPossibleDirection, checkPossibleCommand };
