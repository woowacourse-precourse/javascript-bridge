const OutputView = require("./OutputView");
const Console = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants");
const { OutputView } = require("./constants");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(bridgeLength) {
    // 입력받고 난 다음 할 내용들 다 입출력하고
    const outputView = new OutputView();
    Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH_MESSAGE, (bridgeLength) => {
      this.readMoving(bridgeLength);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeLength) {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
