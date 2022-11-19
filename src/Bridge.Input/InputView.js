const { INPUT } = require("../lib/Ment");
const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(initFunction) {
    Console.readLine(INPUT.BRIDGE_SIZE, initFunction);
    return;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(moveFunction) {
    Console.readLine(INPUT.BRIDGE_MOVE, moveFunction);
    return;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retryFunction) {
    Console.readLine(INPUT.GAME_RETRY, retryFunction);
    return;
  },
};

module.exports = InputView;
