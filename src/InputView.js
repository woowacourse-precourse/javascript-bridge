const { Console } = require("@woowacourse/mission-utils");
const { printMap, printResult } = require("../src/OutputView");
const { canMakeBridge } = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  Game: undefined,

  executeError(error) {
    Console.print(error.message);
    const name = {
      "3-20": () => InputView.readBridgeSize(),
      "U/D": () => InputView.readMoving(),
      "R/Q": () => InputView.readGameCommand(),
    };
    name[error.name]() || "";
  },

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      try {
        this.Game = new BridgeGame(canMakeBridge(Number(input)));
        this.readMoving();
      } catch (error) {
        InputView.executeError(error);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        try {
          this.Game.fillMap(input);
          printMap(this.Game);
          return this.nextRound(this.Game.move(input));
        } catch (error) {
          InputView.executeError(error);
        }
      }
    );
  },

  nextRound(gameState) {
    switch (gameState) {
      case "O":
        return this.readMoving();
      case "성공":
        return printResult(this.Game, "성공");
      case "X":
        return this.readGameCommand();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        try {
          if (this.Game.isRetry(input)) return InputView.readMoving();
          printResult(this.Game, "실패");
          return InputView.gameOver();
        } catch (error) {
          InputView.executeError(error);
        }
      }
    );
  },
};

module.exports = InputView;
