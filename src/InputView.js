/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.\n",
      (bridgeSize) => {
        try {
          if (isNaN(bridgeSize)) {
            throw "[ERROR] 다리 사이즈는 숫자여야 합니다.";
          } else if (bridgeSize < 3 || bridgeSize > 20) {
            throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
          }
        } catch (e) {
          MissionUtils.Console.print(e);
          this.readBridgeSize();
        }
      }
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
