const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./utils/constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeSize) {
    try {
      if (isNaN(bridgeSize))
        throw new Error(
          ' [ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
        );
      if (bridgeSize < 3 || bridgeSize > 20)
        throw new Error('[ERROR] 유효한 범위 내에서 입력해주세요!');
    } catch (error) {
      Console.print(error);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(direction) {
    try {
      if (direction !== 'U' && direction !== 'D')
        throw new Error('[ERROR] 제대로된 값을 입력해주세요!');
    } catch (error) {
      Console.print(error);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(re) {
    try {
      if (re !== 'R' && re !== 'Q')
        throw new Error('[ERROR] 제대로된 값을 입력해주세요!');
    } catch (error) {
      Console.print(error);
    }
  },
};

module.exports = InputView;
