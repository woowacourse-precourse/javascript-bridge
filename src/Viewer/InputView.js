const { Console } = require('@woowacourse/mission-utils');
const GameController = require('../Controller/GameController');
const { MESSAGE } = require('../Utils/Constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   *
   * @param {GameController} controller
   */
  readBridgeSize(controller) {
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (input) => {
      try {
        Console.print('');
        controller.createBridge(input);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize(controller);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   *
   * @param {GameController} controller
   */
  readMoving(controller) {
    Console.readLine(MESSAGE.READ_MOVE_LEVEL, (input) => {
      try {
        controller.setNextTurn(input);
      } catch (error) {
        Console.print(error);
        this.readMoving(controller);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   *
   * @param {GameController} controller
   */
  readGameCommand(controller) {
    Console.readLine(MESSAGE.GAME_RETRY, (input) => {
      try {
        controller.setRetryOrQuit(input);
      } catch (error) {
        Console.print(error);
        this.readGameCommand(controller);
      }
    });
  },
};

module.exports = InputView;
