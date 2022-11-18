/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(question, callback) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (err) {
        console.log(err);
        this.readBridgeSize(question, callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(question, callback) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (err) {
        console.log(err);
        this.readMoving(question, callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {}
};

module.exports = InputView;
