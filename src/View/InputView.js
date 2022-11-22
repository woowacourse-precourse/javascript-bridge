const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES: { INPUT } } = require('../constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  // REMOVE: 실패기록
  // read: (message, callback) => (params) => {
  //   try {
  //     Console.readLine(...params);
  //   } catch (error) {
  //     console.error(error.message);
  //     Console.readLine(message, callback);
  //   }
  // },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridgeSize) {
    Console.readLine(INPUT.BRIDGE_SIZE, setBridgeSize);
    // REMOVE: 실패
    // this.read(message, setBridgeSize);
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
