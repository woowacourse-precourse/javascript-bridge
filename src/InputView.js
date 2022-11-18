const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (answer) => {
      const bridgeLength = this.readBridgeSizeValidate(Number(answer));
    });
  },

  readBridgeSizeValidate(number) {
    if (3 <= number && number <= 20) {
      return number;
    }
    throw "[ERROR]";
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (move) => {
        // move validate 하기 validate에 성공했다면 해당 값을 리턴
        const moving = this.readMovingValidate(move);
      }
    );
  },

  readMovingValidate(move) {
    if (move === "U" || move === "D") {
      return move;
    }
    throw "[ERROR]";
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (regame) => {
        const gameCommand = this.readGameCommandValidate(regame)
      }
    );
  },

  readGameCommandValidate(regame) {
    if (regame === "R" || regame === "Q") {
      return regame;
    }
    throw "[ERROR]";
  }
};

module.exports = InputView;
