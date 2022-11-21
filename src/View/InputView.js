const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  getUserInput(question, callback, redirectInput) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
        redirectInput(callback);
      }
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.getUserInput(
      '다리의 길이를 입력해주세요.\n',
      callback,
      this.readBridgeSize.bind(this),
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.getUserInput(
      '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      callback,
      this.readMoving.bind(this),
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.getUserInput(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      callback,
      this.readGameCommand.bind(this),
    );
  },
};

module.exports = InputView;
