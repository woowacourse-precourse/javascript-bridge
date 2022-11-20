const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const Validation = require("./Validation");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
      const { errorMsg } = Validation.checkBridgeSize(bridgeSize);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.readBridgeSize();
      }

      const bridge = BridgeMaker.makeBridge(bridgeSize, generate);
      const bridgeGame = new BridgeGame(bridge);

      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (direction) => {
        const { errorMsg } = Validation.checkDirection(direction);
        if (errorMsg) {
          Console.print(errorMsg);
          return this.readMoving();
        }

        bridgeGame.move(direction);
        OutputView.printMap(bridgeGame.moveResult());

        if (bridgeGame.isFail()) return this.readGameCommand(bridgeGame);
        return this.readMoving();
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (retry) => {
        const { errorMsg } = Validation.checkRetry(retry);
        if (errorMsg) {
          Console.print(errorMsg);
          return this.readGameCommand();
        }

        if (retry === "R") {
          bridgeGame.retry();
          return this.readMoving();
        }
      }
    );
  },
};

module.exports = InputView;
