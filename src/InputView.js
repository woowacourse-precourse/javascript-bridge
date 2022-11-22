/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const err = "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      try {
        if (input < 3 || input > 20) {
          throw new Error(err);
        }
        if (isNaN(input)) {
          throw new Error(err);
        }
        Console.print(input);

        this.readMoving();
      } catch {
        Console.print(err);
        return this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const query = "이동할 칸을 선택해주세요. (위: U, 아래: D)\n";
    const err = "올바른 값을 입력해주세요.";
    Console.readLine(query, (input) => {
      try {
        if (input === "U" || input === "D") {
          this.readGameCommand();
        }
        Console.print(input);
      } catch {
        Console.print(err);
        return this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const query =
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)";
    const err = "올바른 값을 입력해주세요.";
    Console.readLine(query, (input) => {
      if (input !== "R" || input !== "Q") {
        throw new Error(err);
      }
      const inputGameCommand = String(input);
    });
  },
};

module.exports = InputView;
