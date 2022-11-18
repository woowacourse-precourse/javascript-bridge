const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize(callback) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      callback(input);
    });
  },

  readMoving(callback) {
    MissionUtils.Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        callback(input);
      }
    );
  },

  readGameCommand(callback) {
    MissionUtils.Console.readLine(
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        callback(input);
      }
    );
  },
};

module.exports = InputView;
