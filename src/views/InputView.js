const { Console } = require('@woowacourse/mission-utils');
const Bridge = require('../Bridge');

const { MESSAGE } = require('../constant/index');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (size) => new Bridge(size));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE_POINT, (movePoint) => {});
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY, (decision) => {});
  },
};

module.exports = InputView;
