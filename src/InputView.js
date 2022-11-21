const {Console} = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.', (input) => {
      try {
        callback(this.parseBridgeSize(input));
      } catch (error) {
        Console.print(error.message);

        this.readBridgeSize(callback);
      }
    });
  },

  parseBridgeSize(input) {
    this.validateSpace(input);

    const bridgeSize = Number(input);
    this.validateBridgeSizeRange(bridgeSize);

    return bridgeSize;
  },

  validateSpace(input) {
    const MESSAGE = '[ERROR] 공백을 포함시킬 수 없습니다.';

    if (input.includes(' ')) throw new Error(MESSAGE);
  },

  validateBridgeSizeRange(bridgeSize) {
    const MINIMUM_VALUE = 3;
    const MAXIMUM_VALUE = 20;
    const MESSAGE = `[ERROR] ${MINIMUM_VALUE} 이상 ${MAXIMUM_VALUE} 이하의 숫자만 입력할 수 있습니다.`;

    if (!(MINIMUM_VALUE <= bridgeSize && bridgeSize <= MAXIMUM_VALUE)) throw new Error(MESSAGE);
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
