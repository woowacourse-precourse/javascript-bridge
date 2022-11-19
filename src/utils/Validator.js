const { ERROR_MESSAGE } = require('./message');

const Validator = {
  /**
   * 입력으로 들어온 문자열이 숫자로 구성되어 있는지 검증
   * @param {string} input
   */
  validateNaN(input) {
    const regex = /^[0-9]+$/;

    if (!regex.test(input)) {
      throw new Error(ERROR_MESSAGE.NAN);
    }
  },

  /**
   * 입력으로 들어온 숫자의 범위를 검증
   * @param {number} input
   * @param {number} min
   * @param {number} max
   */
  validateNumberBound(input, min, max) {
    if (input < min || input > max) {
      throw new Error(ERROR_MESSAGE.BOUND);
    }
  },

  /**
   *
   * @param {string} input
   * @param {string[]} list
   */
  validateEqual(input, list) {
    if (!list.includes(input)) {
      throw new Error(ERROR_MESSAGE.WRONG);
    }
  },
};

module.exports = Validator;
