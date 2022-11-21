/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  BRIDGE_SIZE_QUERY: '다리의 길이를 입력해주세요\n',
  MOVING_SPACE_QUERY: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(InputView.BRIDGE_SIZE_QUERY, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(InputView.MOVING_SPACE_QUERY, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
