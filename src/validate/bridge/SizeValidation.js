const { RANGE, ERROR_MESSAGE } = require('../../constants');
const { isNumber } = require('../../utils/isNumber');

const SizeValidation = class {
  validate(bridgeSize) {
    const validations = {
      type: this.isTypeValid,
      range: this.isRangeValid,
    };

    for (const [key, validateFunc] of Object.entries(validations)) {
      const isValid = validateFunc(bridgeSize);
      if (!isValid) return { status: false, message: ERROR_MESSAGE.size[key] };
    }
    return { status: true };
  }

  isTypeValid(bridgeSize) {
    return isNumber(bridgeSize);
  }

  isRangeValid(bridgeSize) {
    const { min, max } = RANGE;
    return min <= bridgeSize && bridgeSize <= max;
  }
};

module.exports = SizeValidation;
