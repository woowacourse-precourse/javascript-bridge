const { MESSAGES } = require('../constants/Messages');
const readLineAsync = require('../utils/readLineAsync');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return readLineAsync(MESSAGES.INPUT_BRIDGE_SIZE);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    return readLineAsync(MESSAGES.INPUT_MOVE_BLOCK);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    return readLineAsync(MESSAGES.INPUT_RETRY);
  },
};

module.exports = InputView;
