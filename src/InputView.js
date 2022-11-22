const { Console } = require("@woowacourse/mission-utils");
const { eventEmitter } = require("./EventEmitter");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeLength) => {
      if (isNaN(bridgeLength)) {
        Console.print("[ERROR] 다리의 길이는 숫자입니다.");
        InputView.readBridgeSize();
        return;
      }

      if (bridgeLength < 3 || bridgeLength > 20) {
        Console.print("[ERROR] 다리의 길이는 3이상, 20이하입니다.");
        InputView.readBridgeSize();
        return;
      }

      Console.print("");
      eventEmitter.emit("readBridgeSize", +bridgeLength);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위:U, 아래:D)\n",
      (direction) => {
        const upperCaseDirection = direction.toUpperCase();

        if (!(upperCaseDirection === "U" || upperCaseDirection === "D")) {
          Console.print("[ERROR] U와 D 중에 하나를 입력하세요.");
          InputView.readMoving();
          return;
        }

        eventEmitter.emit("readMoving", upperCaseDirection);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        const upperCaseAnswer = answer.toUpperCase();

        if (!(upperCaseAnswer === "R" || upperCaseAnswer === "Q")) {
          Console.print("[ERROR] R과 Q 중에 하나를 입력해주세요.");
          InputView.readMoving();
          return;
        }

        eventEmitter.emit("retryOrExit", upperCaseAnswer);
      }
    );
  },
};

module.exports = InputView;
