const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constants');

const InputView = {
  readBridgeSize(input) {
    MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_BRIDGE_SIZE, input);
  },

  readMoving(input) {
    MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_SELECT_DIRECTION, input);
  },

  readGameCommand(input) {
    MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_RETRY_COMMAND, input);
  },
}

module.exports = InputView;
