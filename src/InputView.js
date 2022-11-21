const { Console } = require("@woowacourse/mission-utils");
const gameConst = require("./const");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(moveStart) {
    Console.readLine(
      gameConst.process.INPUT_LENGTH_MESSAGE + "\n",
      (length) => {
        try {
          this.validateBridgeLength(length);
        } catch (err) {
          Console.print(err);
          this.readBridgeSize(moveStart);
          return;
        }
        moveStart(Number(length));
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    Console.readLine(gameConst.process.INPUT_CHOOSE_MESSAGE + "\n", (cmd) => {
      try {
        this.validateMoveCommand(cmd);
      } catch (err) {
        Console.print(err);
        this.readMoving(move);
        return;
      }

      move(cmd);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(makeDecision) {
    Console.readLine(gameConst.process.INPUT_RESART_MESSAGE + "\n", (cmd) => {
      try {
        this.validateRetryCommand(cmd);
      } catch (err) {
        Console.print(err);
        this.readGameCommand(makeDecision);
        return;
      }

      makeDecision(cmd);
    });
  },

  validateBridgeLength(length) {
    if (isNaN(length)) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
    if (Number(length) < 3 || Number(length) > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이여야 합니다.");
    }
  },

  validateMoveCommand(cmd) {
    if (cmd !== "U" && cmd !== "D") {
      throw new Error("[ERROR] 'U' 또는 'D'를 입력해주세요.");
    }
  },

  validateRetryCommand(cmd) {
    if (cmd !== "R" && cmd !== "Q") {
      throw new Error("[ERROR] 'R' 또는 'Q'를 입력해주세요.");
    }
  },
};

module.exports = InputView;
