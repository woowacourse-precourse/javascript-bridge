const { Console } = require("@woowacourse/mission-utils");
const {
  BRIDGE_INPUT_MESSAGES,
  USER_MOVE_MESSAGES,
  USER_RESTART_MESSAGES,
} = require("../constants/Messages");

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
   * @param callbackFunction {callbackFunction} [실행될 콜백 함수]
   * @param controller {object} [컨트롤러]
   */
  readMoving(callbackFunction, controller) {
    Console.readLine(USER_MOVE_MESSAGES.INPUT, (movingInput) =>
      callbackFunction(movingInput, controller)
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param callbackFunction {callbackFunction} [실행될 콜백 함수]
   * @param controller {object} [컨트롤러]
   * @param userMoving {string[]} [유저 이동기록]
   */
  readGameCommand(callbackFunction, controller, userMoving) {
    Console.readLine(USER_RESTART_MESSAGES.INPUT, (restartInput) =>
      callbackFunction(restartInput, controller, userMoving)
    );
  },
};

module.exports = InputView;
