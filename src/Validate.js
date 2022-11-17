const {
  ERROR_TYPE_NUMBER,
  BRIDGE_MIN_LENGTH,
  BRIDGE_MAX_LENGTH,
  ERROR_RANGE,
  ERROR_STRING,
} = require('./Constants');

checkTypeNumber = (input) => {
  return isNaN(input);
};

checkBridgeRange = (input) => {
  return Number(input) < BRIDGE_MIN_LENGTH || Number(input) > BRIDGE_MAX_LENGTH;
};

checkMoveString = (input) => {
  if (input !== 'U' && input !== 'D') throw new Error(ERROR_STRING);
};

validateBridgeSize = (input) => {
  if (checkTypeNumber(input)) throw new Error(ERROR_TYPE_NUMBER);
  if (checkBridgeRange(input)) throw new Error(ERROR_RANGE);
};

module.exports = {
  validateBridgeSize,
  checkMoveString,
};
