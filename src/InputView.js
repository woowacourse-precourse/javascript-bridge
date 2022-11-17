const { Console } = require("@woowacourse/mission-utils");
const { curry, errorHandler } = require("./libs");

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
  /**
   ** 사용자가 다리 길이를 입력받는다.
   */
  readBridgeSize(getBridgeSize) {
    const errorHandledGetBrdigeSize = curry(errorHandler)(
      InputView.readBridgeSize,
      getBridgeSize
    );
    Console.readLine(InputView.BRIDGE_SIZE_QUESTION, errorHandledGetBrdigeSize);
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    const errorrHandledMove = curry(errorHandler)(InputView.readMoving, move);
    Console.readLine(InputView.BRIDGE_MOVE_QUESTION, errorrHandledMove);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retry) {
    const errorHandledRetry = curry(errorHandler)(
      InputView.readGameCommand,
      retry
    );
    Console.readLine(InputView.RESTART_QUESTION, errorHandledRetry);
  },
};

module.exports = InputView;
