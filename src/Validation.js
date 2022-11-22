const { REGEX, ERROR } = require('./constants');
const { Console } = require('@woowacourse/mission-utils');

const Validation = {
  validateBridgeSize(inputStr) {
    if (!REGEX.BRIDGE_SIZE.test(inputStr)) {
      Console.print(ERROR.ENTER_VALID_BRIDGE_SIZE);
      Console.close();
      //throw new Error(ERROR.ENTER_VALID_BRIDGE_SIZE);
    }

    return parseInt(inputStr);
  },

  validateMoving(inputStr) {
    if (!REGEX.MOVING.test(inputStr)) {
      throw new Error(ERROR.SELECT_VALID_MOVING);
    }

    return inputStr;
  },

  validateGameCommand(inputStr) {
    if (!REGEX.GAME_COMMAND.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_GAME_COMMAND);
    }

    return inputStr;
  },
};

module.exports = Validation;
