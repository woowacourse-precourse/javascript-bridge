const MissionUtils = require("@woowacourse/mission-utils");
const { DIRECTION, COMMAND } = require("../utils/constants");
const { MESSAGE_INPUT } = require("../utils/messages");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(`${MESSAGE_INPUT.BRIDGE_SIZE}\n`, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(`\n${MESSAGE_INPUT.MOVING_DIRECTION}\n`, callback);
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(`\n${MESSAGE_INPUT.RETRY_COMMAND}\n`, callback);
  },
};

module.exports = InputView;
