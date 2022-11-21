const {Console} = require('@woowacourse/mission-utils');
const { QUERY } = require('./const.js')
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 파일 경로 변경 가능
 * 메서드 인자 변경 가능
 * 사용자 값 입력을 위한 메서드 추가 가능
 */
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
