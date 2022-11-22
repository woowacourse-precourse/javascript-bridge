const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize = 0;
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (inputBridgeSize) => {
      bridgeSize = inputBridgeSize;
    });
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving = '';
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (inputMoving) => {
      moving = inputMoving;
    });
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameCommand = '';
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (inputGameCommand) => {
      gameCommand = inputGameCommand;
    });
    return gameCommand;
  },
};

module.exports = InputView;
