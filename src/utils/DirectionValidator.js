const { ERROR_MESSAGE } = require("../constants/message");

class DirectionValidator {
  static validate(letter) {
    if (!this.#isLetterUorD(letter)) throw new Error(ERROR_MESSAGE.NOT_VALID_DIRECTION);
  }
  static #isLetterUorD(letter) {
    return letter === "U" || letter === "D";
  }
}
module.exports = DirectionValidator;
