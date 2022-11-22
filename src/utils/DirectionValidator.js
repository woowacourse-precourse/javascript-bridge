const { ERROR_MESSAGE } = require("../constants/message");
const { REPRESENTATION } = require("../constants/values");
const { handleError } = require("./HandleError");

class DirectionValidator {
  static validate(letter) {
    if (!this.#isLetterUorD(letter)) {
      return handleError(ERROR_MESSAGE.NOT_VALID_DIRECTION);
    }
    return true;
  }
  static #isLetterUorD(letter) {
    return (
      letter === REPRESENTATION.LOWER.abbreviatedForm ||
      letter === REPRESENTATION.UPPER.abbreviatedForm
    );
  }
}
module.exports = DirectionValidator;
