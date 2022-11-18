const Validator = require("./Validator");
const { GAME_CONDITION, ERROR_MESSAGE } = require("../utils/Constants");

class BridgeSizeValidator extends Validator {
  constructor() {
    super();
  }

  validate(input) {
    if (!BridgeSizeValidator.isNumber(input))
      super.error(ERROR_MESSAGE.INPUT_SIZE_NOT_NUMBER);

    if (!BridgeSizeValidator.isNumberInRange(input))
      super.error(ERROR_MESSAGE.INPUT_SIZE_NOT_IN_RANGE);
  }

  static isNumber(input) {
    const inputNumber = Math.floor(Number(input));

    return String(inputNumber) === input && inputNumber >= 0;
  }

  static isNumberInRange(input) {
    return (
      Number(input) >= GAME_CONDITION.MIN_BRIDGE_LENGTH &&
      Number(input) <= GAME_CONDITION.MAX_BRIDGE_LENGTH
    );
  }
}

module.exports = BridgeSizeValidator;
