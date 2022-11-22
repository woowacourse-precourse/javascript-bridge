const { ERROR_MESSAGE } = require("../constants/message");
const { handleError } = require("./HandleError");

class RegameCommandValidator {
  static validate(letter) {
    if (!this.#isLetterRorQ(letter)) {
      return handleError(ERROR_MESSAGE.NOT_VALID_REGAME_COMMAND);
    }
    return true;
  }
  static #isLetterRorQ(letter) {
    return letter === "R" || letter === "Q";
  }
}
module.exports = RegameCommandValidator;
