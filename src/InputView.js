const { Console } = require("@woowacourse/mission-utils");
const { printMap, printResult } = require("../src/OutputView");
const { canMakeBridge } = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");
const { QUESTION } = require("./Constant/Constant");

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
    Console.readLine(QUESTION.BRIDGE_SIZE, (input) => {
      try {
        InputView.Game = new BridgeGame(canMakeBridge(Number(input)));
        InputView.readMoving();
      } catch (error) {
        InputView.executeError(error);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(QUESTION.MOVING, (input) => {
      try {
        InputView.Game.fillMap(input);
        printMap(InputView.Game);
        return InputView.nextRound(InputView.Game.move(input));
      } catch (error) {
        InputView.executeError(error);
      }
    });
  },

  nextRound(gameState) {
    switch (gameState) {
      case "O":
        return InputView.readMoving();
      case "성공":
        printResult(InputView.Game, "성공");
        return Console.close();
      case "X":
        return InputView.readGameCommand();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(QUESTION.RETRY, (input) => {
      try {
        if (InputView.Game.isRetry(input)) return InputView.readMoving();
        printResult(InputView.Game, "실패");
        Console.close();
      } catch (error) {
        InputView.executeError(error);
      }
    });
  },
};

module.exports = InputView;
