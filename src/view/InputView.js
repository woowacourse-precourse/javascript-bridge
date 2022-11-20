const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../util/Constant');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.print(MESSAGE.START_GAME);
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(MESSAGE.UPDOWN, callback);
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
