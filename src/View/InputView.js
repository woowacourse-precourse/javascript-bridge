const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/message');
const InputValidator = require('../validator/InputValidator');
const OutputView = require('./OutputView');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.INPUT.BRIDGE_SIZE, (bridgeSize) => {
      try {
        InputValidator.validateInputBridgeSize(Number(bridgeSize));
        callback(Number(bridgeSize));
      } catch (error) {
        OutputView.printError(error);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(MESSAGE.INPUT.MOVING, (moving) => {
      try {
        InputValidator.validateInputMoving(moving);
        callback(moving);
      } catch (error) {
        OutputView.printError(error);
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(MESSAGE.INPUT.GAME_COMMAND, (gameCommand) => {
      try {
        InputValidator.validateInputGameCommand(gameCommand);
        callback(gameCommand);
      } catch (error) {
        OutputView.printError(error);
        this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
