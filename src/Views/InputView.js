const { Console } = require('@woowacourse/mission-utils');
const { isNum, isInRange } = require('../utils/validation');
const {
  PRINT_MESSAGE,
  ERROR_MESSAGE,
  BRIDGE_RULE,
} = require('../utils/constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(makeBridgeAndMove) {
    Console.readLine(PRINT_MESSAGE.BRIDGE_LENGTH, (size) => {
      validateBridgeSize(size);
      makeBridgeAndMove(size);
    });
  },

  validateBridgeSize(size) {
    isNum(size);
    isInRange(Number(size));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(moveBridge) {
    Console.readLine(PRINT_MESSAGE.BRIDGE_TO_MOVE, (moveDirection) => {
      validateMove(moveDirection);
      moveBridge(moveDirection);
    });
  },

  validateMove(moveDirection) {
    if (moveDirection !== BRIDGE_RULE.MOVE_UP && move !== BRIDGE_RULE.MOVE_DOWN)
      throw new Error(ERROR_MESSAGE.VALIDATION_MOVE);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
