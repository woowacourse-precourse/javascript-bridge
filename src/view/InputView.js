// library
const { Console } = require('@woowacourse/mission-utils');
// constant
const { NEW_LINE } = require('../Constants');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(message, callback) {
    Console.readLine(message + NEW_LINE, callback);
  },

  /**
   * 사용자로부터 입력을 받는 역할을 한다.
   */
  readMoving(message, callback) {
    Console.readLine(NEW_LINE + message + NEW_LINE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(message, callback) {
    Console.readLine(NEW_LINE + message + NEW_LINE, callback);
  },
};

module.exports = InputView;
