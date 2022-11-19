const ErrorMessages = require("./constants/ErrorMessages.js");
const Values = require("./constants/Values.js");

class Validator {
  static checkSizeInput(input) {
    const isNumber = /^[0-9]+$/.test(input);
    const isInRange = input > SIZE.MINIMUM && input < SIZE.MAXIMUM;
    if (!isNumber || !isInRange) throw new Error(ErrorMessages.INVALID_SIZE);

    return;
  }
  static checkDirectionInput(input) {
    if (input !== Values.UPWARD_MOVEMENT && input !== Values.DOWNARD_MOVEMENT) {
      throw new Error(ErrorMessages.INVALID_MOVEMENT);
    }
    return;
  }
  static checkCommandInput(input) {
    if (input !== Values.RESTART && input !== Values.QUIT) {
      throw new Error(ErrorMessages.INVALID_COMMAND);
    }
    return;
  }
}

module.exports = Validator;
