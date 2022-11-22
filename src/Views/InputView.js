const { Console } = require('@woowacourse/mission-utils');
const {
  validateBridgeSize,
  validateUserPosition,
  validateRetryAnswer,
} = require('../utils/validations');
const { USER_MESSAGE } = require('../constants/messages');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(`${USER_MESSAGE.INPUT_BRIDGE_SIZE}\n`, (size) => {
      try {
        validateBridgeSize(size);
        callback(size);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(`\n${USER_MESSAGE.INPUT_MOVE_POSITION}\n`, (position) => {
      try {
        validateUserPosition(position);
        callback(position);
      } catch (error) {
        Console.print(error);
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(`${USER_MESSAGE.INPUT_RETRY}\n`, (answer) => {
      try {
        validateRetryAnswer(answer);
        callback(answer);
      } catch (error) {
        Console.print(error);
        this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
