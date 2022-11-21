const { Console } = require("@woowacourse/mission-utils");
const { printMap, printResult } = require("../src/OutputView");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  Game: undefined,

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      try {
        const bridge = BridgeMaker.canMakeBridge(Number(input));
        this.Game = new BridgeGame(bridge);
        this.readMoving();
      } catch (error) {
        Console.print(error);
        InputView.readBridgeSize();
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
          Console.print(error);
          InputView.readMoving();
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
          if (this.Game.isRetry(input)) return this.readMoving();
          return printResult(this.Game, "실패");
        } catch (error) {
          Console.print(error);
          InputView.readGameCommand();
        }
      }
    );
  },
};

module.exports = InputView;
