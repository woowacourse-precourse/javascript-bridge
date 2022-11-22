const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.\n",
      (bridgeLength) => {
        try {
          if (isNaN(bridgeLength))
            throw "[ERROR] 다리의 길이를 숫자로 입력해 주세요.";
          if (3 <= bridgeLength && bridgeLength <= 20) callback(bridgeLength);
          else throw "[ERROR] 다리의 길이를 3 이상 20 이하로 입력해 주세요.";
        } catch (e) {
          MissionUtils.Console.print(e);
          InputView.readBridgeSize(callback);
        }
      }
    );
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving(callback) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (moveValue) => {
        try {
          if (moveValue != "U" && moveValue != "D")
            throw "[ERROR] U 또는 D으로 입력해 주세요.";
          callback(moveValue);
        } catch (e) {
          MissionUtils.Console.print(e);
          InputView.readMoving(callback);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (restart) => {
        try {
          if (restart != "R" && restart != "Q")
            throw "[ERROR] R 또는 Q으로 입력해 주세요.";
          callback(restart);
        } catch (e) {
          MissionUtils.Console.print(e);
          InputView.readGameCommand(callback);
        }
      }
    );
  },
};

module.exports = InputView;
