const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constants/constant');
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
      GAME_MESSAGE.size,
      callback,
      this.readBridgeSize.bind(this),
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.getUserInput(
      GAME_MESSAGE.move,
      callback,
      this.readMoving.bind(this),
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.getUserInput(
      GAME_MESSAGE.retry,
      callback,
      this.readGameCommand.bind(this),
    );
  },
};

module.exports = InputView;
