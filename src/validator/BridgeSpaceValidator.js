const Validator = require("./Validator");
const { GAME_CONDITION, ERROR_MESSAGE } = require("../utils/Constants");

class BridgeSpaceValidator extends Validator {
  constructor() {
    super();
  }

  validate(input) {
    if (BridgeSpaceValidator.isUpOrDownLowerCase(input))
      super.error(ERROR_MESSAGE.INPUT_SPACE_LOWERCASE);

    if (!BridgeSpaceValidator.isUpOrDown(input))
      super.error(ERROR_MESSAGE.INPUT_SPACE);
  }

  static isUpOrDownLowerCase(input) {
    return (
      input === GAME_CONDITION.MOVE_UP.toLocaleLowerCase() ||
      input === GAME_CONDITION.MOVE_DOWN.toLocaleLowerCase()
    );
  }

  static isUpOrDown(input) {
    return (
      input === GAME_CONDITION.MOVE_UP || input === GAME_CONDITION.MOVE_DOWN
    );
  }
}
module.exports = BridgeSpaceValidator;
