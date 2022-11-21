const { BRIDGE, USER_INPUT } = require("../view/stringsUI");
const { INPUT_VAL } = require("./stringsUtils");

class Validation {
  static validate({ condition, message }) {
    if (!condition) {
      // throw new Error(message);
      throw message;
    }
  }

  static size(number) {
    const isInRange = number >= BRIDGE.SIZE_MIN && number <= BRIDGE.SIZE_MAX;
    this.validate({ condition: isInRange, message: INPUT_VAL.SIZE_ERROR });
  }

  static moving(string) {
    const isMove = string === USER_INPUT.UP || string === USER_INPUT.DOWN;
    this.validate({ condition: isMove, message: INPUT_VAL.MOVING_ERROR });
  }

  static gameCommand(string) {
    const isRetry = string === USER_INPUT.RETRY || string === USER_INPUT.QUIT;
    this.validate({ condition: isRetry, message: INPUT_VAL.RETRY_ERROR });
  }
}
module.exports = Validation;
