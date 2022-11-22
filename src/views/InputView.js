const { Console } = require('@woowacourse/mission-utils');
const GameMessage = require('../constants/GameMessage');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   *
   * @param {Function} bridgeSizeCallback
   */
  readBridgeSize(bridgeSizeCallback) {
    Console.readLine(GameMessage.BRIDGE_SIZE, bridgeSizeCallback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   *
   * @param {Function} moveCallback
   */
  readMoving(moveCallback) {
    Console.readLine(GameMessage.MOVE, moveCallback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   *
   * @param {Function} commandCallback
   */
  readGameCommand(commandCallback) {
    Console.readLine(GameMessage.RETRY_OR_QUIT, commandCallback);
  },
};

module.exports = InputView;
