const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_INPUT_MESSAGES } = require("../constants/Messages");

const InputView = {
  /**
   * 사용자로부터 다리 길이를 입력받는다.
   * @param callbackFunction {callbackFunction} [실행될 콜백 함수]
   * @param controller {object} [컨트롤러]
   */
  readBridgeSize(callbackFunction, controller) {
    Console.readLine(BRIDGE_INPUT_MESSAGES.INPUT, (bridgeLengthInput) =>
      callbackFunction(bridgeLengthInput, controller)
    );
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
