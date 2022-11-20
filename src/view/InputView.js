const { INPUT_MESSAGE } = require('../utils/constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.getInput(
      INPUT_MESSAGE.BRIDGE_LENGTH,
      callback,
      this.readBridgeSize(callback).bind(this)
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.getInput(
      INPUT_MESSAGE.MOVING,
      callback,
      this.readMoving(callback).bind(this)
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.getInput(
      INPUT_MESSAGE.RETRY,
      callback,
      this.readGameCommand(callback).bind(this)
    );
  },

  getInput(message, callback, reDo) {
    Console.readLine(message, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err.message);
        reDo(callback);
      }
    });
  },
};

module.exports = InputView;
