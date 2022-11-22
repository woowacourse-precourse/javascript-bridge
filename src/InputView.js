const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readText(label) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(label, (text) => {
        resolve(text);
      });
    });
  },

  async readBridgeSize() {
    const answer = await this.readText("다리의 길이를 입력해주세요.\n");
    return Number(answer);
  },

  async readMoving() {
    const answer = await this.readText(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n"
    );
    return answer;
  },

  async readGameCommand() {
    const regame = await this.readText(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n"
    );
    return regame;
  },
};

module.exports = InputView;
