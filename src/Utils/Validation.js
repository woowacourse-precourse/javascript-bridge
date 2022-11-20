const { INPUT_VAL } = require("./stringsUtils");

class Validation {
  static validate({ condition, message }) {
    if (!condition) {
      throw new Error(message);
    }
  }

  static size(number) {
    const isInRange = number >= 3 && number <= 20;
    this.validate({ condition: isInRange, message: INPUT_VAL.SIZE_ERROR });
  }

  static moving(string) {
    const isMove = string === "U" || string === "D";
    this.validate({ condition: isMove, message: INPUT_VAL.MOVING_ERROR });
  }

  static gameCommand(string) {
    const isRetry = string === "R" || string === "Q";
    this.validate({ condition: isRetry, message: INPUT_VAL.RETRY_ERROR });
  }
}
module.exports = Validation;
