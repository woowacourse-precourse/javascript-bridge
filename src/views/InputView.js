const { MESSAGES } = require('../constants/Messages');
const readLineAsync = require('../utils/readLineAsync');
const validator = require('../utils/validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const size = await readLineAsync(MESSAGES.INPUT_BRIDGE_SIZE);
    validator.validateSize(size);
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const block = await readLineAsync(MESSAGES.INPUT_MOVE_BLOCK);
    validator.validateBlock(block);
    return block;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const command = await readLineAsync(MESSAGES.INPUT_RETRY);
    validator.validateCommand(command);
    return command;
  },
};

module.exports = InputView;
