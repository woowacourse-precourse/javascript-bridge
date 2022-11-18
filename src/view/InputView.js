const { INPUT_MESSAGE } = require('../utils/constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_LENGTH, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err.message);
        this.readBridgeSize(callback).bind(this);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVING, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err.message);
        this.readMoving(callback).bind(this);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.RETRY, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err.message);
        this.readGameCommand(callback).bind(this);
      }
    });
  },
};

module.exports = InputView;
