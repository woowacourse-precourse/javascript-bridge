const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      this.validateBridgeSize(Number(input));
    });
  },

  validateBridgeSize(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20))
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },

  readMoving() {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (input) => {
      callback(input);
    });
  },
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (input) => {
      callback(input);
    });
  },
};

module.exports = InputView;
