const Validator = require('../utils/Validator');
const Console = require('../utils/Console');
const InputView = require('../views/InputView');
const { GAME_STATUS } = require('../constants/values');

const InputChecker = {
  checkDirection(direction, move) {
    try {
      this.checkDirectionInput(direction);
    } catch (error) {
      Console.print(error);
      InputView.readMoving(move);
      return GAME_STATUS.ERROR;
    }

    return GAME_STATUS.PLAYING;
  },

  checkDirectionInput(direction) {
    Validator.checkTruthy(direction);
    Validator.checkStringType(direction);
    Validator.checkPlayerInputLength(direction);
    Validator.checkDirectionIncludes(direction);
  },

  checkSelect(select, restartOrQuit) {
    try {
      this.checkSelectInput(select);
    } catch (error) {
      Console.print(error);
      InputView.readGameCommand(restartOrQuit);
      return GAME_STATUS.ERROR;
    }

    return GAME_STATUS.PLAYING;
  },

  checkSelectInput(select) {
    Validator.checkTruthy(select);
    Validator.checkStringType(select);
    Validator.checkPlayerInputLength(select);
    Validator.checkSelectIncludes(select);
  },
};

module.exports = InputChecker;
