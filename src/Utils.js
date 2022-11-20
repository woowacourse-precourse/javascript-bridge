const { Console } = require('@woowacourse/mission-utils');
const { ERROR, RULE, COMMAND, RETRY_OR_EXIT } = require('./Constants');

const playerInput = (message, callback) => {
  Console.readLine(message, callback);
};

const close = () => {
  Console.close();
};

const printMessage = (message) => {
  Console.print(message);
};

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

const checkPossibleCommand = (command) => {
  const positionList = Object.values(COMMAND);
  if (!positionList.includes(command)) {
    throwErrorMessage(ERROR.NOT_POSSIBLE_COMMAND);
  }
};

const checkHasKey = (key) => {
  if (!RETRY_OR_EXIT.includes(key)) {
    throwErrorMessage(ERROR.NOT_KEY);
  }
};

module.exports = {
  playerInput,
  close,
  printMessage,
  checkIsInteger,
  checkSizeInRange,
  checkPossibleCommand,
  checkHasKey,
};
