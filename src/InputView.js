const { Console } = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('./utils/BridgeRandomNumberGenerator');
const MESSAGES = require('./constants/Messages');

const BridgeMaker = require('./BridgeMaker');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGES.INPUT_BRIDGE_LENGTH, (length) => {
      // TODO length validation check
      const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(MESSAGES.INPUT_MOVE_BLOCK, (block) => {
      // TODO block validation check
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
