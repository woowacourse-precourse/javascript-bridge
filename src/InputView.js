const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 파라미터로 전달받은 함수를 readLine의 콜백함수에서 실행한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(roundStartBranch) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      MissionUtils.Console.print("");
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
};

module.exports = InputView;
