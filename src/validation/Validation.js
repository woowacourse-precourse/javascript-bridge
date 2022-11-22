const { ERROR } = require('../constants/messages');
const { SETTING } = require('../constants/setting');
const { Console } = require('@woowacourse/mission-utils');

class Validation {
  static validationForBridgeLength(input) {
    if (!Number.isInteger(Number(input))) {
      Console.print(ERROR.NUMBER);
    }
    if (!(Number(input) <= SETTING.MAX_NUMBER &&Number(input) >= SETTING.MIN_NUMBER)) {
      Console.print(ERROR.BRIDGE_LENGTH_BOUNDARY);
    }
    if (input.length === 0) {
      Console.print(ERROR.EMPTY);
    }
  }

  static validationForNextMove(input) {
    if (input.length === 0) {
      Console.print(ERROR.EMPTY);
    }
    if (!(input === SETTING.GO_UP || input === SETTING.GO_DOWN)) {
      Console.print(ERROR.NEXT_MOVE);
    }
  }

  static validationForRetry(input) {
    if (input.length === 0) {
      Console.print(ERROR.EMPTY);
    }
    if (!(input === SETTING.RETRY_COMMAND || input === SETTING.QUIT_COMMAND)) {
      Console.print(ERROR.RETRY);
    }
  }
}

module.exports = Validation;
