const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(`${Message.INPUT_MESSAGE.BRIDGE_SIZE_TEXT}`, (size) => {})
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(`${Message.INPUT_MESSAGE.MOVING_TEXT}`, (move) => {})
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(`${Message.INPUT_MESSAGE.READ_GAME_COMMAND_TEXT}`, (command) => {})
  },
};
module.exports = InputView;
