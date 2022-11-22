const { Console } = require('@woowacourse/mission-utils');
const { QUESTIONS } = require('./constants');

const {
  validateBridgeSize,
  validatePosition,
  validateRetryCommand,
  errorHandler
} = require('./Util');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  inputHandler(question, validateFunc, callback) {
    Console.readLine(question, input => {
      try {
        validateFunc(input);
        callback(input);
      } catch ({ message }) {
        errorHandler(message, this.inputHandler.bind(this, ...arguments));
      }
    });
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.inputHandler(QUESTIONS.bridgeSize, validateBridgeSize, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.inputHandler(QUESTIONS.movePosition, validatePosition, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.inputHandler(QUESTIONS.retry, validateRetryCommand, callback);
  }
};

module.exports = InputView;
