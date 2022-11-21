const { Console } = require('@woowacourse/mission-utils');
const { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput } = require('../utils/validator.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (userInput) => {
      try {
        isCollectBridgeLength(userInput);
        callback(userInput);
      } catch (error) {
        this.readErrorBridgeSize(error, callback);
      }
    });
  },

  readErrorBridgeSize(error, callback) {
    Console.print(error.message);
    this.readBridgeSize(callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (userInput) => {
      try {
        isValidateMoveInput(userInput);
        callback(userInput);
      } catch (error) {
        this.readErrorMoving(error, callback);
      }
    });
  },

  readErrorMoving(error, callback) {
    Console.print(error.message);
    this.readMoving(callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (userInput) => {
      try {
        isValidateRetryInput(userInput);
        callback(userInput);
      } catch (error) {
        this.readErrorGameCommand(error, callback);
      }
    });
  },

  readErrorGameCommand(error, callback) {
    Console.print(error.message);
    this.readGameCommand(callback);
  },
};

module.exports = InputView;
