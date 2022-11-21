const { ERROR_MESSAGE } = require("../constants/message");

class RegameCommandValidator {
  static validate(letter) {
    if (!this.#isLetterRorQ(letter)) throw new Error(ERROR_MESSAGE.NOT_VALID_REGAME_COMMAND);
  }
  static #isLetterRorQ(letter) {
    return letter === "R" || letter === "Q";
  }
}
module.exports = RegameCommandValidator;
