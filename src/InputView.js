const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeSizeFunc) {
    Console.readLine("다리의 길이를 입력해주세요.\n", bridgeSizeFunc);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(movingFunc) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", movingFunc);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retryFunc) {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", retryFunc);
  },
};

module.exports = InputView;
