const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(settingBridge) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (size) => {
      try {
        settingBridge(size);
      } catch(e) {
        Console.print(e);
        this.readBridgeSize(settingBridge);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(movingSteps) {
    Console.readLine(MESSAGE.INPUT_MOVING, (move) => {
      try {
        movingSteps(move);
      } catch(e) {
        Console.print(e);
        this.readMoving(movingSteps);
      }
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(endingBridge) {
    Console.readLine(MESSAGE.INPUT_ENDING, (command) => {
      try {
        endingBridge(command);
      } catch(e) {
        Console.print(e);
        this.readGameCommand(endingBridge);
      }
    })
  },
};

module.exports = InputView;
