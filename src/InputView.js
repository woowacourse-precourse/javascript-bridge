const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize;
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (bridgeSizeInput) => {
      bridgeSize = Number(bridgeSizeInput);
    });
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving;
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (movingInput) => {
      moving = movingInput;
    });
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
