const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      const bridgeSize = Number(input);
      this.checkBridgeSize(bridgeSize);
      makeBridge(bridgeSize, generate);
    });
  },

  /**
   * 입력받은 다리의 길이를 검증한다.
   * @param {number} bridgeSize 다리의 길이
   * @throws {Error} 3 이상 20 이하의 숫자가 아닌 경우
   */
  checkBridgeSize(bridgeSize) {
    if (!Number.isInteger(bridgeSize) || bridgeSize < 3 || bridgeSize > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
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
