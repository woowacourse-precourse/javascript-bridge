const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  BRIDGE_SIZE_QUESTION: "다리의 길이를 입력해주세요.\n",
  BRIDGE_MOVE_QUESTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART_QUESTION:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",

  readBridgeSize() {
    Console.readLine(InputView.BRIDGE_SIZE_QUESTION, (input) => {
      Validation.validateIsNumber(input);
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
