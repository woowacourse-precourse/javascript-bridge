const io = require('../infrastucture/io/Io');
const MESSAGE = require('./view.constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    return io.input(MESSAGE.INPUT.BRIDGE_LENGTH, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    io.input(MESSAGE.INPUT.SELECT_DIRECTION, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    io.input(MESSAGE.INPUT.RESTART_OR_EXIT, callback);
  },
};

module.exports = InputView;
