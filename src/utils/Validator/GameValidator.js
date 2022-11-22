const { ERROR_MESSAGE, RETRY_MESSAGE } = require('../Constant');

const GameValidator = {
  validator(input) {
    this.isRightRetryString(input);
  },

  /**
   *
   * @param {string} input
   */
  isRightRetryString(input) {
    if (input !== RETRY_MESSAGE.RETRY && input !== RETRY_MESSAGE.QUIT)
      throw ERROR_MESSAGE.RETRY_INPUT;
  },
};

module.exports = GameValidator;
