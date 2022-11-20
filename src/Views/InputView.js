const { Console } = require('@woowacourse/mission-utils');
const { isNum, isInRange } = require('../utils/validation');
const { PRINT_MESSAGE } = require('../utils/constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(corssBridge) {
    Console.readLine(PRINT_MESSAGE.BRIDGE_LENGTH, (size) => {
      validateBridgeSize(size);
      corssBridge();
    });
  },

  validateBridgeSize(size) {
    isNum(size);
    isInRange(Number(size));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
