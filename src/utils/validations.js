const { ERROR, BRIDGE_VALUE, REGEX, OPTION } = require('./constants');

/* readBridgeSize */
const checkNumberValidation = (userInput) => {
  const numberRegex = REGEX.NUMBER;
  if (userInput.match(numberRegex)) return true;

  throw new Error(ERROR.NOT_A_NUMBER);
};

const validateBridgeRange = (userInput) => {
  if (userInput >= BRIDGE_VALUE.RANGE_MIN && userInput <= BRIDGE_VALUE.RANGE_MAX) return;

  throw new Error(ERROR.INVALID_RANGE);
};

const validateBridgeSize = (userInput) => {
  checkNumberValidation(userInput);
  validateBridgeRange(userInput);
};

/* Moving Input Validation */
const validateMovingInput = (userInput) => {
  const options = [OPTION.UP, OPTION.DOWN];
  if (options.includes(userInput)) return;

  throw new Error(ERROR.MOVING);
};

/* Continue Validation */
const validateContinue = (userInput) => {
  const options = [OPTION.RETRY, OPTION.QUIT];
  if (options.includes(userInput)) return;

  throw new Error(ERROR.CONTINUE);
};

module.exports = { validateBridgeSize, validateMovingInput, validateContinue };
