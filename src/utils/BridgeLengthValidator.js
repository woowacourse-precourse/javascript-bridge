const { ERROR_MESSAGE } = require("../constants/message");
const { handleError } = require("./HandleError");
class BridgeLengthValidator {
  static validate(number) {
    if (this.#isNotNumber(number)) {
      return handleError(ERROR_MESSAGE.NOT_INTEGER);
    }
    if (this.#isValidRange(number)) {
      return handleError(ERROR_MESSAGE.BRIDGE_LENGTH);
    }
    return true;
  }

  static #isNotNumber(number) {
    const isNumber = /^[0-9]+$/;
    return !isNumber.test(number);
  }
  static #isValidRange(number) {
    return number > 20 || number < 3;
  }
}
module.exports = BridgeLengthValidator;
