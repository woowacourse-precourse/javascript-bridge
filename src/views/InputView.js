/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { GAME_QUESTION } = require('../../lib/constans');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(GAME_QUESTION.size, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(GAME_QUESTION.moving, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(GAME_QUESTION.retry, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
        this.readGameCommand(callback);
      }
    });
  }
};

module.exports = InputView;
