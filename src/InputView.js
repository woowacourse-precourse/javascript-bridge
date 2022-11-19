const { Console } = require("@woowacourse/mission-utils");
const { QUERY_MESSAGE } = require("./util/Constant");

const { readLine, print } = Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function} callback 입력받은 후 실행할 기능
   */
  readBridgeSize(callback) {
    readLine(QUERY_MESSAGE.BRIDGE_SIZE, (answer) => {
      try {
        callback(answer);
      } catch (error) {
        print(error.message);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
