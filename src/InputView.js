const { Console } = require('@woowacourse/mission-utils');
const { validateBridge } = require('./utils/validate');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      try {
        validateBridge(Number(size));
        const bridge = BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate());
      } catch (e) {
        this.readBridgeSize();
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
