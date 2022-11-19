const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readText(label) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(label, (text) => {
        resolve(text);
      });
    });
  },

  async readBridgeSize() {
    const answer = await this.readText("다리의 길이를 입력해주세요.\n");
    return Number(answer)
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
        const gameCommand = this.readGameCommandValidate(regame);
      }
    );
  },

  readGameCommandValidate(regame) {
    if (regame === "R" || regame === "Q") {
      return regame;
    }
    throw "[ERROR]";
  },
};

module.exports = InputView;
