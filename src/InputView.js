const { Console } = require("@woowacourse/mission-utils");
const gameConst = require("../constant/constant.js");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
   readBridgeSize(makeBridge) {
    Console.readLine(gameConst.process.INPUT_LENGTH_MESSAGE + "\n", (length) => {
        try {
          makeBridge(Number(length));
        } catch (err) {
          Console.print(err.message);
          this.readBridgeSize(makeBridge);
        }
      }
    );
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
   readMoving(move) {
    Console.readLine(gameConst.process.INPUT_CHOOSE_MESSAGE + "\n", (cmd) => {
      try {
        move(cmd);
      } catch (err) {
        Console.print(err.message);
        this.readMoving(move);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
   readGameCommand(makeDecision) {
    Console.readLine(gameConst.process.INPUT_RESART_MESSAGE + "\n", (cmd) => {
      try {
        makeDecision(cmd);
      } catch (err) {
        Console.print(err.message);
        this.readGameCommand(makeDecision);
      }
    });
  },
};

module.exports = InputView;
