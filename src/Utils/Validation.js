const { INPUT_VAL } = require("./stringsValidation");

class Validation {
  static validate({ condition, message }) {
    if (!condition) {
      throw new Error(message);
    }
  }

  static inputSize(number) {
    const isInRange = number >= 3 && number <= 20;
    this.validate({ condition: isInRange, message: INPUT_VAL.SIZE_ERROR });
  }

  static inputMove(string) {
    const isMove = string === "U" || string === "D";
    this.validate({ condition: isMove, message: INPUT_VAL.MOVING_ERROR });
  }

  static inputRetry(string) {
    const isRetry = string === "R" || string === "Q";
    this.validate({ condition: isRetry, message: INPUT_VAL.RETRY_ERROR });
  }
}
module.exports = Validation;
