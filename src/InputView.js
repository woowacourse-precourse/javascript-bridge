const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/constant");
const { ERROR } = require("./lib/error");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(callback) {
    Console.readLine(MESSAGES.GET_LENGTH, (input) => {
      try {
        ERROR.CHECK_BRIDGE_LENGTH(input);
      } catch (ex) {
        Console.print(ex);
        this.readBridgeSize(callback);
        return;
      } finally {
        callback(input);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(MESSAGES.WHERE_TO_MOVE, (input) => {
      try {
        ERROR.CHECK_WHERE_TO_GO(input);
      } catch (ex) {
        Console.print(ex);
        this.readMoving(callback);
        return;
      }
      callback(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(MESSAGES.DO_IT_AGAIN, (input) => {
      try {
        ERROR.CHECK_ARE_YOU_END(input);
      } catch (ex) {
        Console.print(ex);
        this.readGameCommand(callback);
        return;
      }
      callback(input);
    });
  },
};

module.exports = InputView;
