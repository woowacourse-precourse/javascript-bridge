const { ERROR_MESSAGE, BRIDGE_ELEMENT } = require('../Constant');

const BridgeValidator = {
  validator(number) {
    this.isNumber(number);
    this.isNaturalNumber(number);
    this.isRightNumberRange(BRIDGE_ELEMENT.LENGTH_MINIMUM, BRIDGE_ELEMENT.LENGTH_MAXIMUM, number);
  },

  /**
   *
   * @param {number} number
   */
  isNumber(number) {
    const regex = /^[0-9-]{1,2}$/g;

    if (!regex.test(number)) {
      throw ERROR_MESSAGE.ISNAN;
    }
  },

  /**
   *
   * @param {number} number
   */
  isNaturalNumber(number) {
    const regex = /^(\+)?([0-9]+)$/g;

    if (!regex.test(number)) {
      throw ERROR_MESSAGE.ISNAN;
    }
  },

  /**
   *
   * @param {number} start
   * @param {number} end
   * @param {number} number
   */
  isRightNumberRange(start, end, number) {
    if (number < start || number > end) throw ERROR_MESSAGE.RANGE;
  },
};

module.exports = BridgeValidator;
