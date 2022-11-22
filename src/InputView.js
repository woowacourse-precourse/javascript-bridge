const { Console } = require('@woowacourse/mission-utils');
const { command } = require('./utils/message');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(size) {
    Console.readLine(command.GET_BRIDGE_SIZE, size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    Console.readLine(command.MOVE, move);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retry) {
    Console.readLine(command.RETRY, retry);
  },
};

module.exports = InputView;
