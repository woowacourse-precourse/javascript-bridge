const ErrorMessages = require("../constants/ErrorMessages.js");
const Values = require("../constants/Values.js");

class Validator {
  static checkSizeInput(input) {
    const isNumber = /^[0-9]+$/.test(input);
    const isInRange = input >= Values.SIZE_MINIMUM && input <= Values.SIZE_MAXIMUM;
    if (!isNumber || !isInRange) throw new Error(ErrorMessages.INVALID_SIZE);
  }
  static checkDirectionInput(input) {
    if (input !== Values.UPWARD_MOVEMENT && input !== Values.DOWNARD_MOVEMENT) {
      throw new Error(ErrorMessages.INVALID_MOVEMENT);
    }
  }
  static checkCommandInput(input) {
    if (input !== Values.RESTART && input !== Values.QUIT) {
      throw new Error(ErrorMessages.INVALID_COMMAND);
    }
  }
}

module.exports = Validator;
