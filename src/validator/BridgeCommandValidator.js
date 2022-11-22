const Validator = require("./Validator");
const { GAME_CONDITION, ERROR_MESSAGE } = require("../utils/Constants");

class BridgeCommandValidator extends Validator {
  constructor() {
    super();
  }

  validate(input) {
    if (BridgeCommandValidator.isUpOrDownLowerCase(input)) super.error(ERROR_MESSAGE.INPUT_COMMAND_LOWERCASE);
    
    if (!BridgeCommandValidator.isUpOrDown(input)) super.error(ERROR_MESSAGE.INPUT_COMMAND);
  }

  static isUpOrDownLowerCase(input) {
    return (
      input === GAME_CONDITION.RESTART_GAME.toLocaleLowerCase() ||
      input === GAME_CONDITION.QUIT_GAME.toLocaleLowerCase()
    );
  }

  static isUpOrDown(input) {
    return input === GAME_CONDITION.RESTART_GAME || input === GAME_CONDITION.QUIT_GAME;
  }
}
module.exports = BridgeCommandValidator;
