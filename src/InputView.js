const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_SIZE, MOVING_COMMAND, GAME_COMMAND } = require('./Message');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readInput(message, callback) {
    Console.readLine(message, (input) => callback(input));
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge) {
    InputView.readInput(BRIDGE_SIZE, setBridge);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    InputView.readInput(MOVING_COMMAND, move);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
