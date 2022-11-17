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

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
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
