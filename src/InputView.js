const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(message, setBridgeSize) {
    Console.readLine(message, setBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(message, move) {
    Console.readLine(message, move);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(message, runCommand) {
    Console.readLine(message, runCommand);
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
