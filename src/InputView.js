const { Console } = require("@woowacourse/mission-utils");
const Bridge = require("./model/Bridge");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE: "이동할 칸을 입력해주세요. (위: U, 아래: D)\n",
  GAME_END: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(BRIDGE_SIZE, (input) => {
      this.bridge = new Bridge(+input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
