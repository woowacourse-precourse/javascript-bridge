const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_INPUT_MESSAGES } = require("../constants/messages");

const InputView = {
  /**
   * 사용자로부터 생성할 다리의 길이를 입력받는다.
   * @param callbackFunction {callbackFunction}
   */
  readBridgeSize(callbackFunction) {
    Console.readLine(BRIDGE_INPUT_MESSAGES.INPUT, callbackFunction);
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
