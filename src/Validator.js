const ErrorMessage = require("./ErrorMessage");

class Validator {
  static isInteger(input) {
    if (input.match(/\D+/) || Number.isNaN(parseInt(input))) {
      throw new Error(ErrorMessage.NOT_INTEGER);
    }
  }
}

module.exports = Validator;
