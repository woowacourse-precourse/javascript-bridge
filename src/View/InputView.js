const { Console } = require("@woowacourse/mission-utils");
const Validator = require("../Validator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(cb) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      Validator.validateBridgeSize(inputBridgeSize);
      Console.print("\n");
      cb(parseInt(inputBridgeSize, 10));
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(cb) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (inputMoveCommand) => {
        Validator.validateMoveCommand(inputMoveCommand);
        cb(inputMoveCommand);
      },
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(cb) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (inputRetryCommand) => {
        Validator.validateRetryCommand(inputRetryCommand);
        cb(inputRetryCommand);
      },
    );
  },
};

module.exports = InputView;
