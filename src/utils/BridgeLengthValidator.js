const { ERROR_MESSAGE } = require("../constants/message");
const { VALID_BRIDGE_LENGTH } = require("../constants/values");
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
    return number > VALID_BRIDGE_LENGTH.MAX || number < VALID_BRIDGE_LENGTH.MIN;
  }
}
module.exports = BridgeLengthValidator;
