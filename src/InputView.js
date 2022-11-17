const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constants');

const InputView = {
  readBridgeSize() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_BRIDGE_SIZE, (value) => {
        const result = Number(value);
        resolve(result);
      });
    });
  },

  readMoving() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_SELECT_DIRECTION, (value) => {
        const result = value.toUpperCase();
        resolve(result);
      });
    });},

  readGameCommand() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_RESTART_COMMAND, (value) => {
        const result = value.toUpperCase();
        resolve(result);
      });
    });
  },
};

module.exports = InputView;
