const { Console } = require('@woowacourse/mission-utils');

const MESSAGES = require('../constants/Messages');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    return this.readLine(MESSAGES.bridgeLength);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  async readLine(query) {
    return new Promise((resolve) => {
      Console.readLine(query, (input) => resolve(input));
    });
  },
};

module.exports = InputView;
