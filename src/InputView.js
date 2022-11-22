const {Console} = require('@woowacourse/mission-utils');
const { QUERY } = require('./const.js')

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(QUERY.BRIDGE_LENGTH,callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(QUERY.MOVE_DIRECTION,callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(QUERY.GAME_RESTART,callback);
  },
};

module.exports = InputView;
