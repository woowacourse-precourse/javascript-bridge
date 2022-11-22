const { INPUT_MESSAGE, ERROR_MESSAGE } = require('../Constant');

const SelectedValidator = {
  validator(input) {
    this.isRightLevelString(input);
  },
  /**
   *
   * @param {string} input
   */
  isRightLevelString(input) {
    if (input !== INPUT_MESSAGE.UP && input !== INPUT_MESSAGE.DOWN) throw ERROR_MESSAGE.LEVEL_INPUT;
  },
};

module.exports = SelectedValidator;
