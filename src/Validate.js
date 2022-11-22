const {
  ERROR_TYPE_NUMBER,
  MIN_LENGTH,
  MAX_LENGTH,
  ERROR_RANGE,
  ERROR_STRING,
} = require('./Constants');

checkTypeNumber = (input) => isNaN(input);

checkBridgeRange = (input) =>
  Number(input) < MIN_LENGTH || Number(input) > MAX_LENGTH;

checkMoveString = (input) => {
  if (input !== 'U' && input !== 'D') throw new Error(ERROR_STRING);
};

checkRetryString = (input) => {
  if (input !== 'R' && input !== 'Q') throw new Error(ERROR_STRING);
};

validateBridgeSize = (input) => {
  if (checkTypeNumber(input)) throw new Error(ERROR_TYPE_NUMBER);
  if (checkBridgeRange(input)) throw new Error(ERROR_RANGE);
};

module.exports = {
  validateBridgeSize,
  checkMoveString,
  checkRetryString,
};
