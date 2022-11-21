const GameError = require('../../Error/GameError');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('../Constant');

const SelectedValidator = {
  /**
   *
   * @param {string} input
   */
  isRightLevelString(input) {
    if (input !== INPUT_MESSAGE.UP && input !== INPUT_MESSAGE.DOWN)
      throw new GameError(ERROR_MESSAGE.LEVEL_INPUT);
  },
};

module.exports = SelectedValidator;
