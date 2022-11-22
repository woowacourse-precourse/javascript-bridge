const { ERROR_MESSAGE } = require("../constants/message");
const { handleError } = require("./HandleError");
const { STATUS } = require("../constants/message");

class RegameCommandValidator {
  static validate(letter) {
    if (!this.#isLetterRorQ(letter)) {
      return handleError(ERROR_MESSAGE.NOT_VALID_REGAME_COMMAND);
    }
    return true;
  }
  static #isLetterRorQ(letter) {
    return letter === STATUS.HOPE_RESTART || letter === STATUS.HOPE_QUIT;
  }
}
module.exports = RegameCommandValidator;
