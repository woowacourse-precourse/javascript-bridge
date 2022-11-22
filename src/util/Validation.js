const { ERROR_MESSAGE } = require("./Messages.js");

const Validation = {
  // 3이상 20이하의 숫자
  LENGTH_REGEX: /^[3-9]{1}$|^1{1}[0-9]{1}$|20/,
  MOVE_REGEX: /^[UD]$/,
  checkLength(input) {
    if (!this.LENGTH_REGEX.test(input))
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
  },

  // 'U', 'D' 아닐시
  checkMove(input) {
    if (!this.MOVE_REGEX.test(input)) throw new Error(ERROR_MESSAGE.MOVE_ERROR);
  },
};

module.exports = Validation;
