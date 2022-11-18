const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(startGame) {
    Console.readLine('다리의 길이를 입력해주세요.', (bridgeLength) =>
      startGame(bridgeLength)
    );
  },
};

module.exports = InputView;
