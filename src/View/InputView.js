const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/message');
const Validator = require('../Validator');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    try {
      Console.readLine(MESSAGE.INPUT.BRIDGE_SIZE, (bridgeSize) => {
        Validator.validateBridgeSize(Number(bridgeSize));
        callback(Number(bridgeSize));
      });
    } catch (error) {
      Console.print(error);
      this.readBridgeSize(callback);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    try {
      Console.readLine(MESSAGE.INPUT.MOVING, (moving) => {
        Validator.validateMoving(moving);
        callback(moving);
      });
    } catch (error) {
      Console.print(error);
      this.readMoving(callback);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    try {
      Console.readLine(MESSAGE.INPUT.GAME_COMMAND, (gameCommand) => {
        Validator.validateGameCommand(gameCommand);
        callback(gameCommand);
      });
    } catch (error) {
      Console.print(error);
      this.readGameCommand(callback);
    }
  },
};

module.exports = InputView;
