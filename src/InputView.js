const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG } = require('./constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(size) {
    Console.readLine(GAME_MSG.ENTER_SIZE, size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    Console.readLine(GAME_MSG.ENTER_MOVE, move);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(input) {
    Console.readLine(GAME_MSG.ENTER_RETRY_OR_QUIT, input);
  },
};

module.exports = InputView;
