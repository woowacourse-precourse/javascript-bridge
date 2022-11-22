const { Console } = require('@woowacourse/mission-utils');
const { QUESTIONS, ERROR_MSG, RETRY_COMMAND_TYPE } = require('./constants');

const {
  validateBridgeSize,
  validatePosition,
  validateRetryCommand
} = require('./Util');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(QUESTIONS.bridgeSize, len => {
      try {
        validateBridgeSize(len);
        callback(len);
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(QUESTIONS.movePosition, position => {
      try {
        validatePosition(position);
        callback(position);
      } catch (error) {
        Console.print(error.message);
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retryCallback, quitCallback) {
    Console.readLine(QUESTIONS.retry, command => {
      try {
        if (!validateRetryCommand(command))
          throw new Error(ERROR_MSG.invalidRetryCommand);
        if (command === RETRY_COMMAND_TYPE[0]) {
          retryCallback();
        }
        if (command === RETRY_COMMAND_TYPE[1]) {
          quitCallback();
        }
      } catch (error) {
        Console.print(error.message);
        this.readGameCommand(retryCallback, quitCallback);
      }
    });
  }
};

module.exports = InputView;
