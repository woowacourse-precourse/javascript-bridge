const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (answer) => {
      try {
        callback(answer);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(callback);
      }
    });
  },

  readMoving(callback) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (answer) => {
        try {
          callback(answer);
        } catch (e) {
          Console.print(e);
          this.readMoving(callback);
        }
      }
    );
  },

  readGameCommand(callback) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        try {
          callback(answer);
        } catch (e) {
          Console.print(e);
          this.readGameCommand(callback);
        }
      }
    );
  },
};

module.exports = InputView;
