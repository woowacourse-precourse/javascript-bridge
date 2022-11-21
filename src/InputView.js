const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./constants/messages");
const { Errors } = require("./Errors");

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
        Errors.validateSizeIsNumber(size);
        Errors.validateSizeINRange(size);
        continueGame(size);
      } catch (e) {
        Console.print(e);
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  // readMoving(callBack) {
  //   Console.readLine(INPUT.MOVE_DIRECTION, callBack);
  // },

  readMoving(continueGame) {
    Console.readLine(INPUT.MOVE_DIRECTION, (answer) => {
      try {
        Errors.validateUserDirection(answer);
        continueGame(answer);
      } catch (e) {
        Console.print(e);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  // readGameCommand(callBack) {
  //   Console.readLine(INPUT.RETRY, callBack);
  // },

  readGameCommand(continueGame) {
    Console.readLine(INPUT.RETRY, (answer) => {
      try {
        Errors.validateRetryCorrect(answer);
        continueGame(answer);
      } catch (e) {
        Console.print(e);
      }
    });
  },
};

module.exports = InputView;
