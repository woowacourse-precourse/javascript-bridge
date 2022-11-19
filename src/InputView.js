const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGameController = require("./BridgeGameController");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(roundStartBranch) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      roundStartBranch(input)
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(roundInputBranch) {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n",  (input) => {
      roundInputBranch(input)
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(roundRetryBranch) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (input) => {
      roundRetryBranch(input)
    });
  },

  validateBridgeLength(input) {
    if(!input.match(/^[0-9]+$/g)) throw new Error("[ERROR] 다리 길이는 숫자(정수)를 입력해야 합니다.");
    else if(parseInt(input)>20 || parseInt(input)<3) throw new Error("[ERROR] 다리 길이는 3이상 20이하의 수를 입력해야 합니다.");
    return input;
  }
};

module.exports = InputView;
