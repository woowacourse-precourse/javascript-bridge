const { INPUT_VAL } = require("./stringsValidation");

class Validation {
  static validate(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  static inputSize(number) {
    const isInRange = number >= 3 && number <= 20;
    this.validate(isInRange, INPUT_VAL.SIZE_ERROR);
  }

  static inputMove(string) {
    const isMove = string === "U" || string === "D";
    this.validate(isMove, INPUT_VAL.MOVING_ERROR);
  }

  static inputRetry(string) {}
}
module.exports = Validation;
