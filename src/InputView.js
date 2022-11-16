const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('./Constants');
const { checkBridgeSize } = require('./Validate');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.BRIDGE_SIZE, (size) => {
      const SIZE = Number(size);
      if (checkBridgeSize(SIZE)) {
        BridgeMaker.makeBridge(SIZE, BridgeRandomNumberGenerator.generate);
      } else {
        throw new Error(ERROR.BRIDGE_SIZE);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
