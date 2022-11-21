const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (input) => {
      try {
        return callback(input);
      } catch (error) {
        Console.print(error.message);
        return this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, index, size) {
    Console.readLine(INPUT_MESSAGE.MOVING, (input) => {
      try {
        callback(input, index);
        return index < size - 1 && this.readMoving(callback, index + 1, size);
      } catch (error) {
        Console.print(error.message);
        return this.readMoving(callback, index, size);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.COMMAND, (input) => {
      try {
        return callback(input);
      } catch (error) {
        Console.print(error.message);
        return this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
