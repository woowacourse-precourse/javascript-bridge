const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

const Message = require("./constants/messages");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(Message.INPUT_MESSAGE.BRIDGE_LENGTH, callback);
    },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(Message.INPUT_MESSAGE.MOVE_BRIDGE_UP_DOWN, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(Message.INPUT_MESSAGE.GAME_RESTART_QUIT, callback);
  },
};

module.exports = InputView;
