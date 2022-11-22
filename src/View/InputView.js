const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES: { INPUT } } = require('../constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(setBridgeSize) {
    Console.readLine(INPUT.BRIDGE_SIZE, setBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    Console.readLine(INPUT.MOVING, move);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(runCommand) {
    Console.readLine(INPUT.RETRY, runCommand);
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
