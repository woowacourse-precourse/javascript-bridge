/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const InputView = {
  readBridgeSize() {
    Console.readLine(Messages.INPUT_BRIDGE_SIZE, (bridgeSize) => {
      this.validateBridgeSize(bridgeSize);
      bridgeSize = Number(bridgeSize);

      Console.print('');
      const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);

      this.readMoving(bridge);
    });
  },

  validateBridgeSize(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20)) throw new Error(Messages.BRIDGE_SIZE_ERROR);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(Messages.INPUT_MOVING, (upOrDown) => {
      this.validateMoving(upOrDown);
    });
  },

  validateMoving(upOrDown) {
    if (upOrDown !== 'U' && upOrDown !== 'D') throw new Error(Messages.MOVING_ERROR);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
