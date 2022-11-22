const { REGEX, RANGE, ERROR_MESSAGE } = require('../constants');

const SizeValidation = {
  validate(bridgeSize) {
    const isValid = this.isTypeValid(bridgeSize) && this.isRangeValid(bridgeSize);

    if (!isValid) return { status: false, message: ERROR_MESSAGE.size };
    return { status: true };
  },

  isTypeValid(bridgeSize) {
    return REGEX.IS_NUMBER.test(bridgeSize);
  },

  isRangeValid(bridgeSize) {
    const { min, max } = RANGE;
    return Number(bridgeSize) >= min && Number(bridgeSize) <= max;
  },
};

module.exports = SizeValidation;
