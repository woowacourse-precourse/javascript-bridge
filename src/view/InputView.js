const { Console } = require('@woowacourse/mission-utils');
const { INFORMATION_MESSAGE } = require('../constants/index.js');
const { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput } = require('../utils/bridgeGameValidator.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
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
