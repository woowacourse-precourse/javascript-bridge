const {
  LINE_BREAK,
} = require('../utils/constants/GameSystem');
const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 개행문자의 통일성을 위한 readLine 함수 분리
   */
  readLine(message, callback) {
    Console.readLine(LINE_BREAK + message + LINE_BREAK, callback);
  },

};

module.exports = InputView;
