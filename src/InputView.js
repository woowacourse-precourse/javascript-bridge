/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const {
  BRIDGE_SIZE_REQUEST,
  MOVE_REQUEST,
  RETRY_REQUEST,
} = require('./constants');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(BRIDGE_SIZE_REQUEST, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(MOVE_REQUEST, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(RETRY_REQUEST, callback);
  },
};

module.exports = InputView;
