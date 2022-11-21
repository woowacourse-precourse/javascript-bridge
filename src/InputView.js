const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('./constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (input) => {
      if (!Validator.validateNumber(input) || !Validator.validateNumberInRange(input)) {
        Console.print(ERROR_MESSAGE.SIZE_ERROR);
        return this.readBridgeSize(callback);
      }
      return callback(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, index, size) {
    Console.readLine(INPUT_MESSAGE.MOVING, (input) => {
      if (!Validator.validateUpDown(input)) {
        Console.print(ERROR_MESSAGE.MOVING_ERROR);
        return this.readMoving(callback, index, size);
      }
      callback(input, index);
      return index < size - 1 && this.readMoving(callback, index + 1, size);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.COMMAND, (input) => {
      if (!Validator.validateGameCommand(input)) {
        Console.print(ERROR_MESSAGE.COMMAND_ERROR);
        return this.readGameCommand(callback);
      }
      return callback(input);
    });
  },
};

module.exports = InputView;
