const { Console } = require('@woowacourse/mission-utils');
const errorMessage = require('../constants/errorMessage');
const userInputMessage = require('../constants/userInputMessage');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(userInputMessage.ENTER_BRIDGE_LENGTH, (bridgeLength) => {
      try {
        this.validateBridgeSize(bridgeLength);
        Console.print(bridgeLength);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  validateBridgeSize(bridgeLength) {
    if (isNaN(bridgeLength)) throw new Error(errorMessage.NOT_NUMBER);
    if (bridgeLength < 3 || bridgeLength > 20) throw new Error(errorMessage.OUT_RANGE_NUMBER);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(userInputMessage.ENTER_MOVE_DIRECTION, (movingDirection) => {
      try {
        this.validateMovingDirection(movingDirection);
        Console.print(movingDirection);
      } catch (e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  validateMovingDirection(movingDirection) {
    if (movingDirection !== 'U' && movingDirection !== 'D')
      throw new Error(errorMessage.MOVE_DIRECTION);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(userInputMessage.ENTER_RESTART, (restartOrEnd) => {
      this.validateGameCommand(restartOrEnd);
    });
  },

  validateGameCommand(restartOrEnd) {
    if (restartOrEnd !== 'R' && restartOrEnd !== 'Q') throw new Error(errorMessage.RESTART);
  },
};

InputView.readGameCommand();

module.exports = InputView;
