const MissionUtils = require("@woowacourse/mission-utils");
const { KEY, ERR } = require("../constants/constants");

class Validation {
  static validSize(input) {
    if (isNaN(+input)) {
      throw ERR.NOT_NUMBER;
    }
    if (!(input >= 3 && input <= 20)) {
      throw ERR.WRONG_BRIDGE_SIZE;
    }
  }

  static validMoveKey(input) {
    if (input !== KEY.UP && input !== KEY.DOWN) {
      throw ERR.WRONG_MOVE_KEY;
    }
  }

  static validCommandKey(input) {
    if (input !== KEY.RETRY && input !== KEY.QUIT) {
      throw ERR.WRONG_COMMAND_KEY;
    }
  }
}

module.exports = Validation;
