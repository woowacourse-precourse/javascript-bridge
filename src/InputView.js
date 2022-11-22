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
      try {
        if (isNaN(bridgeLength)) {
          throw new Error("다리의 길이는 숫자입니다.");
        }

        if (bridgeLength < 3 || bridgeLength > 20) {
          throw new Error("다리의 길이는 3이상, 20이하입니다.");
        }

        Console.print("");
        eventEmitter.emit("readBridgeSize", +bridgeLength);
      } catch (error) {
        Console.print(`[ERROR] ${error}`);
        InputView.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위:U, 아래:D)\n",
      (direction) => {
        try {
          const upperCaseDirection = direction.toUpperCase();
          if (!(upperCaseDirection === "U" || upperCaseDirection === "D")) {
            throw new Error("U와 D 중에 하나를 입력하세요.");
          }
          eventEmitter.emit("readMoving", upperCaseDirection);
        } catch (error) {
          Console.print(`[ERROR] ${error}`);
          InputView.readMoving();
        }
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
        try {
          const upperCaseAnswer = answer.toUpperCase();
          if (!(upperCaseAnswer === "R" || upperCaseAnswer === "Q")) {
            throw new Error("R과 Q 중에 하나를 입력해주세요.");
          }
          eventEmitter.emit("retryOrExit", upperCaseAnswer);
        } catch (error) {
          Console.print(`[ERROR] ${error}`);
          InputView.readGameCommand();
        }
      }
    );
  },
};

module.exports = InputView;
