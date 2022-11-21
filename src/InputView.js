const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  MEESAGE: {
    BRIDGE_SIZE_INPUT: "다리의 길이를 입력해주세요.",
    MOVE_DIRECTION_INPUT: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    RESTART_CHECK_INPUT: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(handler) {
    Console.readLine(`${this.MEESAGE.BRIDGE_SIZE_INPUT}`, handler);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(handler) {
    Console.readLine(`${this.MEESAGE.MOVE_DIRECTION_INPUT}`, handler);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handler) {
    Console.readLine(`${this.MEESAGE.RESTART_CHECK_INPUT}`, handler);
  },
};

module.exports = InputView;
