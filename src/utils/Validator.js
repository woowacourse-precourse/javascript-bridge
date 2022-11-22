const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_INFO, GAME_STATUS } = require('../constants/BridgeGameSetting');
const MESSAGE = require('../constants/BridgeGameMessage');

class Validator {
  static throwErr(result, msg) {
    if (!result) {
      Console.print(msg);
    }
  }

  static isCorrectLength(number) {
    const result =
      number >= BRIDGE_INFO.MIN_LENGTH && number <= BRIDGE_INFO.MAX_LENGTH;
    Validator.throwErr(result, MESSAGE.ERROR.INCORRECT_BRIDGE_LENGTH);
  }

  static isUpOrDown(input) {
    const result =
      input === BRIDGE_INFO.SELECT_UP || input === BRIDGE_INFO.SELECT_DOWN;
    Validator.throwErr(result, MESSAGE.ERROR.INCORRECT_BRIDGE_SELECT);
  }

  static isRestartOrQuit(input) {
    const result =
      input === GAME_STATUS.GAME_RESTART || input === GAME_STATUS.GAME_QUIT;
    Validator.throwErr(result, MESSAGE.ERROR.INCORRECT_GAME_STATUS);
  }
}

module.exports = Validator;
