const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (answer) => answer);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (cell) => cell);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
