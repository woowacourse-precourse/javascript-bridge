const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./constants/messages");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(callBack) {
    Console.readLine(INPUT.BRIDGE_SIZE, callBack);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving(callBack) {
    Console.readLine(INPUT.MOVE_DIRECTION, callBack);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  readGameCommand(callBack) {
    Console.readLine(INPUT.RETRY, callBack);
  },
};

module.exports = InputView;
