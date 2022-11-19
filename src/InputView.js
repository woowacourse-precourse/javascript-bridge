const { Console } = require('@woowacourse/mission-utils');
const {
  validateBridgeSize,
  validateDirection,
  validateGameCommand,
} = require('./Validator');
const { MESSAGE } = require('./Constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(startGame) {
    Console.readLine(MESSAGE.bridgeSize, (bridgeLength) => {
      try {
        validateBridgeSize(bridgeLength);
        startGame(bridgeLength);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(startGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(moveOne) {
    Console.readLine(MESSAGE.direction, (direction) => {
      try {
        validateDirection(direction);
        moveOne(direction);
      } catch (e) {
        Console.print(e);
        this.readMoving(moveOne);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(checkRetry) {
    Console.readLine(MESSAGE.retry, (command) => {
      try {
        validateGameCommand(command);
        checkRetry(command);
      } catch (e) {
        Console.print(e);
        this.readGameCommand(checkRetry);
      }
    });
  },
};

module.exports = InputView;
