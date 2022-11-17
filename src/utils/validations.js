const { Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('./constants');

const checkNumberValidation = (userInput) => {
  const numberRegex = /^\d+$/g;
  if (userInput.match(numberRegex)) return true;

  Console.close();
  throw new Error(ERROR.NOT_A_NUMBER);
};

const validateBridgeRange = (userInput) => {
  if (userInput < 3 || userInput > 20) return;

  Console.close();
  throw new Error(ERROR.INVALID_RANGE);
};

const validateBridgeSize = (userInput) => {
  checkNumberValidation(userInput);
  validateBridgeRange(userInput);
};

module.exports = { validateBridgeSize };
