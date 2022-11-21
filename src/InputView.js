const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine("\n다리의 길이를 입력해주세요.\n", (input) => {
      try {
        Validation.validateBridgeSize(input);
      } catch (error) {
        Console.print(error);
        InputView.readBridgeSize();
      }
      callback(input);
    });
  },

  getBridgeSize(bridgeSize) {
    return Number(bridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(
      "\n이동할 칸을 선택해주세요.(위: U, 아래: D)\n",
      (input) => {
        try {
          Validation.validateMoving(input);
        } catch (error) {
          Console.print(error);
          InputView.readMoving();
        }
        callback(input);
      }
    );
  },

  getMoving(moving) {
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        try {
          Validation.validateGameCommand(input);
        } catch (error) {
          Console.print(error);
          InputView.readGameCommand();
        }
        callback(input);
      }
    );
  },

  getGameCommand(command) {
    return command;
  },
};

module.exports = InputView;
