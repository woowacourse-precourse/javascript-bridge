const { ERROR_MESSAGE } = require("../constants/message");

class BridgeLengthValidator {
  static validate(number) {
    if (this.#isNotNumber(number)) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    if (this.#isValidRange(number)) throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH);
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
