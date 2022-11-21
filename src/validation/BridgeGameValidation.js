const { BRIDGE_SIZE } = require('../constants/BridgeSettings');
const { ERROR_MESSAGES, FORM } = require('../constants/Error');

const BridgeError = require('../errors/BridgeError');

const BridgeGameValidation = {
  isNumber(input) {
    if (!FORM.number.test(input)) {
      throw new BridgeError(ERROR_MESSAGES.onlyNumber);
    }
  },
  isNumberOutOfRange(input) {
    const num = Number(input);

    if (num < BRIDGE_SIZE.min || num > BRIDGE_SIZE.max) {
      throw new BridgeError(ERROR_MESSAGES.outOfRange);
    }
  },
  validate(input) {
    this.isNumber(input);
    this.isNumberOutOfRange(input);
  },
};

module.exports = BridgeGameValidation;
