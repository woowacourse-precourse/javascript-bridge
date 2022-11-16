const {
  ERROR_TYPE_NUMBER,
  BRIDGE_MIN_LENGTH,
  BRIDGE_MAX_LENGTH,
  ERROR_RANGE,
} = require('./Constants');

checkTypeNumber = (input) => {
  return isNaN(input);
};

checkBridgeRange = (input) => {
  return Number(input) < BRIDGE_MIN_LENGTH || Number(input) > BRIDGE_MAX_LENGTH;
};

validateBridgeSize = (input) => {
  if (checkTypeNumber(input)) throw new Error(ERROR_TYPE_NUMBER);
  if (checkBridgeRange(input)) throw new Error(ERROR_RANGE);
};

module.exports = {
  validateBridgeSize,
};
