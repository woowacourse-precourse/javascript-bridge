const { Console } = require('@woowacourse/mission-utils');
const { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput } = require('../utils/bridgeGameValidator.js');
const { INFORMATION_MESSAGE } = require('../constants/index.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INFORMATION_MESSAGE.READ_BRIDGE_SIZE, (userInput) => {
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
    Console.readLine(INFORMATION_MESSAGE.READ_MOVE, (userInput) => {
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
    Console.readLine(INFORMATION_MESSAGE.READ_GAME_COMMAND, (userInput) => {
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
