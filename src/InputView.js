const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
   readBridgeSize(inputBridgeSize) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (inputBridgeSize));
  },

  readMoving(inputMoving) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (inputMoving));
  },

  readGameCommand(inputRetryOrEnd) {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (inputRetryOrEnd));
  },
};

module.exports = InputView;
