const GameError = require('../../Error/GameError');
const { ERROR_MESSAGE, RETRY_MESSAGE } = require('../Constant');

const GameValidator = {
  /**
   *
   * @param {string} input
   */
  isRightRetryString(input) {
    if (input !== RETRY_MESSAGE.RETRY && input !== RETRY_MESSAGE.QUIT)
      throw new GameError(ERROR_MESSAGE.RETRY_INPUT);
  },
};

module.exports = GameValidator;
