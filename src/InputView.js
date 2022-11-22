const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE: [],
  
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      this.validateBridge(size);
      this.BRIDGE = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    })
  },

  validateBridge(size) {
    if (size < 3 || size > 20)
      throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() { },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
