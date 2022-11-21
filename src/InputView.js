const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('./Message');

const { readLine, print } = Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(callback) {
    readLine(OUTPUT_MESSAGE.BRIDGE_SIZE, input => {
      try {
        callback(Number(input));
      } catch (e) {
        print(e.message);
        this.readBridgeSize(callback);
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
