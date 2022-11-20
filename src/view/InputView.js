const io = require('../infrastucture/io/Io');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
      return io.input('다리의 길이를 입력하세요.', callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    io.input('이동할 칸을 입력하세요.(U/D)', callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(cb) {
    io.input('게임을 새로 시작하려면 R, 종료하려면 Q를 입력하세요.', cb);
  },
};

module.exports = InputView;
