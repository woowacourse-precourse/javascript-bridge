const ErrorMessage = require("../messages/ErrorMessage");

class Validator {
  static isInteger(input) {
    if (input.match(/\D+/) || Number.isNaN(parseInt(input))) {
      throw new Error(ErrorMessage.NOT_INTEGER);
    }
  }

  static isValidDirection(direction) {
    if (direction !== "U" && direction !== "D")
      throw new Error(ErrorMessage.NOT_VALID_DIRECTION);
  }
}

module.exports = Validator;
