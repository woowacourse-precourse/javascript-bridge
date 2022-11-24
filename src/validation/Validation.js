const { BRIDGE, USER_INPUT } = require("../view/stringsUI");
const { INPUT_VAL } = require("./stringsValidation");

// validation을 model 생성자 내부로 바꿔보자
class Validation {
  static validate({ condition, message }) {
    if (!condition) {
      throw new Error(message);
      // throw message;
    }
  }

  static size(number) {
    const size = parseInt(number, 10);
    const isNumber = !isNaN(size);
    const isInRange = number >= BRIDGE.SIZE_MIN && number <= BRIDGE.SIZE_MAX;
    this.validate({
      condition: isNumber && isInRange,
      message: INPUT_VAL.SIZE_ERROR,
    });
    return size;
  }

  static moving(string) {
    const isMove = string === USER_INPUT.UP || string === USER_INPUT.DOWN;
    this.validate({ condition: isMove, message: INPUT_VAL.MOVING_ERROR });
    return string;
  }

  static gameCommand(string) {
    const isRetry = string === USER_INPUT.RETRY || string === USER_INPUT.QUIT;
    this.validate({ condition: isRetry, message: INPUT_VAL.RETRY_ERROR });
    return string;
  }
}
module.exports = Validation;
