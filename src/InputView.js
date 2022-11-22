const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize(bridgeSizeFunc) {
    Console.readLine("다리의 길이를 입력해주세요.\n", bridgeSizeFunc);
  },

  readMoving(movingFunc) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", movingFunc);
  },

  readGameCommand(retryFunc) {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", retryFunc);
  },
};

module.exports = InputView;
