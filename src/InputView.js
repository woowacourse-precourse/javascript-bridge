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
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (answer) => {
      bridgeSize = Number(answer);
    });
    this.checkBridgeSize(bridgeSize);
    return bridgeSize;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
  checkBridgeSize(bridgeSize) {
    try {
      if (!(bridgeSize >= 3 && bridgeSize <= 20))
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  },
};

module.exports = InputView;
