const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   *
   * @param {function} next
   */
  readBridgeSize(next) {
    const message = "다리의 길이를 입력해주세요.";
    Console.readLine(message, (bridgeLength) => next(bridgeLength));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(next) {
    const message = "이동할 칸을 선택해주세요. (위: U, 아래: D)";
    Console.readLine(message, (command) => next(command));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const message =
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)";
    Console.readLine(message, (command) => next(command));
  },
};

module.exports = InputView;
