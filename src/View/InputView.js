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
    const MESSAGE = "다리의 길이를 입력해주세요.\n";

    Console.readLine(MESSAGE, (inputBridgeSize) => {
      this.readBridgeSizeCallback(inputBridgeSize, cb);
    });
  },

  readBridgeSizeCallback(inputBridgeSize, cb) {
    try {
      Validator.validateBridgeSize(inputBridgeSize);
      Console.print("\n");
      cb(parseInt(inputBridgeSize, 10));
    } catch (error) {
      Console.print(error.message);
      this.readBridgeSize(cb);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(cb) {
    const MESSAGE = "이동할 칸을 선택해주세요. (위: U, 아래: D)\n";

    Console.readLine(MESSAGE, (inputMoveCommand) => {
      this.readMovingCallback(inputMoveCommand, cb);
    });
  },

  readMovingCallback(inputMoveCommand, cb) {
    try {
      Validator.validateMoveCommand(inputMoveCommand);
      cb(inputMoveCommand);
    } catch (error) {
      Console.print(error.message);
      this.readMoving(cb);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(cb) {
    const MESSAGE =
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n";

    Console.readLine(MESSAGE, (inputRetryCommand) => {
      this.readGameCommandCallback(inputRetryCommand, cb);
    });
  },

  readGameCommandCallback(inputRetryCommand, cb) {
    try {
      Validator.validateRetryCommand(inputRetryCommand);
      cb(inputRetryCommand);
    } catch (error) {
      Console.print(error.message);
      this.readGameCommand(cb);
    }
  },
};

module.exports = InputView;
