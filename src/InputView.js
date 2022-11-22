const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./constants/messages");
const { Validations } = require("./Validations");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(continueGame) {
    Console.readLine(INPUT.BRIDGE_SIZE, (size) => {
      try {
        Validations.validateSizeIsNumber(size);
        Validations.validateSizeINRange(size);
        continueGame(size);
      } catch (e) {
        Console.print(e);
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving(continueGame) {
    Console.readLine(INPUT.MOVE_DIRECTION, (answer) => {
      try {
        Validations.validateUserDirection(answer);
        continueGame(answer);
      } catch (e) {
        Console.print(e);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  readGameCommand(continueGame) {
    Console.readLine(INPUT.RETRY, (answer) => {
      try {
        Validations.validateRetryCorrect(answer);
        continueGame(answer);
      } catch (e) {
        Console.print(e);
      }
    });
  },
};

module.exports = InputView;
