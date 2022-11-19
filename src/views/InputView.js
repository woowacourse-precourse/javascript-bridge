const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../utils/message');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(handleMakeBridge) {
    Console.readLine(MESSAGE.askBridgeSize, handleMakeBridge);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(handleMoving) {
    Console.readLine(MESSAGE.askMoveDirection, handleMoving);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handleCommand) {
    Console.readLine(MESSAGE.askGameCommand, handleCommand);
  },
};

module.exports = InputView;
