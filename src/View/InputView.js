const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_SIZE, MOVING_COMMAND, GAME_COMMAND } = require('../constants/Message');
const {
  validateBridgeSize,
  validateMovingCommand,
  validateGameCommand,
} = require('../ErrorHandler');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readInput(message, callback, validate) {
    Console.readLine(message, (input) => {
      try {
        validate(input);
        callback(input);
      } catch (error) {
        InputView.readInput(message, callback, validate);
      }
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge) {
    InputView.readInput(BRIDGE_SIZE, setBridge, validateBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    InputView.readInput(MOVING_COMMAND, move, validateMovingCommand);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(decideToRetryOrQuit) {
    InputView.readInput(GAME_COMMAND, decideToRetryOrQuit, validateGameCommand);
  },
};

module.exports = InputView;
