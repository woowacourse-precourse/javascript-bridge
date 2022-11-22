const MissionUtils = require("@woowacourse/mission-utils");
const INPUT_MESSAGE = require("./constans/InputMessage");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let input;
    MissionUtils.Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (answer) => {
      input = answer;
    });
    return input;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let input;
    MissionUtils.Console.readLine(INPUT_MESSAGE.MOVE_POINT, (answer) => {
      input = answer;
    });
    return input;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let input;
    MissionUtils.Console.readLine(INPUT_MESSAGE.RESTART_QUIT, (answer) => {
      input = answer;
    });
    return input;
  },
};

module.exports = InputView;
