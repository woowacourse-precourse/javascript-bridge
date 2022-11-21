/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
// InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
const { Console } = require('@woowacourse/mission-utils');
const { QUERY } = require('./constants/constants');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge) {
    Console.readLine(QUERY.SIZE, setBridge);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(QUERY.MOVE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
