const Console = require("@woowacourse/mission-utils").Console;
const { isInRange, isNumber } = require("../utils/validate");

const PROMPT = Object.freeze({
  START: "다리의 길이를 입력해주세요.\n",
	MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
	RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n"
});

const InputView = {
  readBridgeSize(handler) {
    Console.readLine(PROMPT.START, (command) => {
      try {
        if (!isNumber(command) || !isInRange(3, 20, +command))
          throw new Error("[ERROR] 3부터 20의 숫자를 입력해주세요.");
        handler(+command);
      } catch(e) {
        Console.print(e.message);
        InputView.readBridgeSize(handler);
      }
    })
  },
  readMoving(handler) {
    Console.readLine(PROMPT.MOVE, (command) => {
      try {
        const position = command.toUpperCase();
        handler(position);
      } catch(e) {
        Console.print(e.message);
        InputView.readMoving(handler);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handler) {
    Console.readLine(PROMPT.RETRY, (command) => {
      try {
        const retryCommand = command.toUpperCase();
        if (retryCommand !== "R" && retryCommand !== "Q")
          throw new Error("[ERROR] R또는 Q만 입력해주세요.");
        handler(retryCommand);
      } catch(e) {
        Console.print(e.message);
        InputView.readGameCommand(handler);
      }});
  },
};

module.exports = InputView;
