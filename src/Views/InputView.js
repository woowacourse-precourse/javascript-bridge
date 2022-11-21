const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');
const {
  validateBridgeSize,
  validateMovingInput,
  validateContinue,
} = require('../utils/validations');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 제공된 InputView 객체를 활용해 구현해야 한다.
 * InputView의 파일 경로는 변경할 수 있다.
 * InputView의 메서드의 인자는 변경할 수 있다.
 * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(callback) {
    Console.readLine(MESSAGE.SELECT_BRIDGE_SIZE, (userInput) => {
      try {
        validateBridgeSize(userInput);
        callback(userInput);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize(callback);
      }
    });
  },

  getBridgeSize(size) {
    return Number(size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
4   */
  readMoving(callback) {
    Console.readLine(MESSAGE.GUESS, (userInput) => {
      try {
        validateMovingInput(userInput);
        callback(userInput);
      } catch (error) {
        Console.print(error);
        this.readMoving(callback);
      }
    });
  },

  getUserMoving(userInput) {
    return userInput;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_CONTINUE, (userInput) => {
      try {
        validateContinue(userInput);
        callback(userInput);
      } catch (error) {
        Console.print(error);
        this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
