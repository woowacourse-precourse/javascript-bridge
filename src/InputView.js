const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./util/Constant");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function} callback size 입력받은 후 실행할 기능
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (answer) => {
      try {
        callback(answer);
      } catch (error) {
        Console.print(error.message);
        InputView.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function} callback 이동할 칸("U" or "D") 입력받은 후 실행할 기능
   */
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVING_SPACE, (answer) => {
      try {
        callback(answer);
      } catch (error) {
        Console.print(error.message);
        InputView.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
