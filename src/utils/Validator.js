const BridgeError = require('../Error/BridgeError');
const GameError = require('../Error/GameError');
const { ERROR_MESSAGE, INPUT_MESSAGE, RETRY_MESSAGE } = require('./Constant');

const Validator = {
  /**
   *
   * @param {number} number
   */
  isNumber(number) {
    const regex = /^[0-9-]{1,2}$/g;

    if (!regex.test(number)) {
      throw new BridgeError(ERROR_MESSAGE.ISNAN);
    }
  },

  /**
   *
   * @param {number} number
   */
  isNaturalNumber(number) {
    const regex = /^(\+)?([0-9]+)$/g;

    if (!regex.test(number)) {
      throw new BridgeError(ERROR_MESSAGE.ISNAN);
    }
  },

  /**
   *
   * @param {number} start
   * @param {number} end
   * @param {number} number
   */
  isRightNumberRange(start, end, number) {
    if (number < start || number > end)
      throw new BridgeError(ERROR_MESSAGE.RANGE);
  },

  /**
   *
   * @param {string} input
   */
  isRightLevelString(input) {
    if (input !== INPUT_MESSAGE.UP && input !== INPUT_MESSAGE.DOWN)
      throw new GameError(ERROR_MESSAGE.LEVEL_INPUT);
  },

  /**
   *
   * @param {string} input
   */
  isRightRetryString(input) {
    if (input !== RETRY_MESSAGE.RETRY && input !== RETRY_MESSAGE.QUIT)
      throw new GameError(ERROR_MESSAGE.RETRY_INPUT);
  },
};

module.exports = Validator;
