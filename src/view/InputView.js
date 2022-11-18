const Console = require("@woowacourse/mission-utils").Console;

const PROMPT = Object.freeze({
  START: "다리의 길이를 입력해주세요.\n",
	MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
	RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n"
});
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(handler) {
    Console.readLine(PROMPT.START, handler.bind(this));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(handler) {
    Console.readLine(PROMPT.MOVE, handler.bind(this));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handler) {
    Console.readLine(PROMPT.RETRY, handler.bind(this));
  },
};

module.exports = InputView;
