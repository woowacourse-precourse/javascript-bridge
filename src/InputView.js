const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');
const InputView = {
  readBridgeSize(makeBridge) {
      Console.readLine(MESSAGE.INPUT_SIZE, (input) => {
        const size = Number(input);
        makeBridge(size);
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
