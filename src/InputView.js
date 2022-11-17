const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const Console = MissionUtils.Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

// Console.readLine 이용가능
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callBack) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeLength) => {
      return callBack(bridgeLength);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callBack) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
      (moveKey) => {
        return callBack(moveKey);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  readGameCommand(stopCallBack, retryCallBack) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n",
      (endKey) => {
        if (endKey === "R") {
          return retryCallBack();
        }
        if (endKey === "Q") {
          return stopCallBack();
        }
      }
    );
  }
};

module.exports = InputView;
