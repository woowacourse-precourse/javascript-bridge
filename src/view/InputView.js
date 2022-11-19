const { ERROR_MESSAGE } = require('../constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  input() {
    throw new Error(ERROR_MESSAGE.interface_class);
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    throw new Error(ERROR_MESSAGE.interface_class);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    throw new Error(ERROR_MESSAGE.interface_class);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    throw new Error(ERROR_MESSAGE.interface_class);
  },
};

module.exports = InputView;
