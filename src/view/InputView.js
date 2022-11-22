const { MESSAGE } = require('../data/constants');
const IO = require('../utils/IO');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    IO.input(MESSAGE.INPUT_BRIDGE_SIZE, (length) => callback(length));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    IO.input(MESSAGE.MOVE_DIRECTION, (direction) => callback(direction));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    IO.input(MESSAGE.RETRY, (command) => callback(command));
  },
};

module.exports = InputView;
