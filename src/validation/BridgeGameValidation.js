const { BRIDGE_SIZE } = require('../constants/BridgeSettings');
const { ERROR_MESSAGES, FORM } = require('../constants/Error');

const BridgeError = require('../errors/BridgeError');

const BridgeGameValidation = (input) => {
  const isNumber = (input) => !FORM.number.test(input);
  const checkType = (input) => {
    if (!isNumber(input)) throw new BridgeError(ERROR_MESSAGES.onlyNumber);
  };
  const isOutOfRange = (num) => num < BRIDGE_SIZE.min || num > BRIDGE_SIZE.max;
  const checkRange = (input) => {
    const num = Number(input);

    if (isOutOfRange(num)) new BridgeError(ERROR_MESSAGES.outOfRange);
  };

  const validate = (input) => {
    checkType(input);
    checkRange(input);
  };

  return validate(input);
};

module.exports = BridgeGameValidation;
