const { ERROR_MESSAGE } = require("../constants/message");
const { REPRESENTATION } = require("../constants/values");

class DirectionValidator {
  static validate(letter) {
    if (!this.#isLetterUorD(letter)) throw new Error(ERROR_MESSAGE.NOT_VALID_DIRECTION);
  }
  static #isLetterUorD(letter) {
    return (
      letter === REPRESENTATION.LOWER.abbreviatedForm ||
      letter === REPRESENTATION.UPPER.abbreviatedForm
    );
  }
}
module.exports = DirectionValidator;
