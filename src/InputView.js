const { Console } = require("@woowacourse/mission-utils");
const ERROR = require("../utils/constant");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutPutView = require("./OutputView");

const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  onErrorHandler(condition, errorMessage, retryFunction) {
    try {
      if (condition) {
        throw errorMessage;
      }
    } catch (e) {
      Console.print(e);
      retryFunction();
    }
  },

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (aNumber) => {
      this.onErrorHandler(isNaN(aNumber), ERROR.NOT_A_NUMBER, () => this.readBridgeSize());
      this.onErrorHandler(Number(aNumber) > 20 || Number(aNumber) < 3, ERROR.LENGTH_IS_NOT_CORRECT, () => this.readBridgeSize());

      if (!isNaN(aNumber)) {
        bridgeGame.makeRandomBridge(BridgeMaker.makeBridge(Number(aNumber), () => generate()));
        Console.print(bridgeGame.randomBridge);
        this.readMoving(bridgeGame.randomBridge);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving() {
    if (bridgeGame.isSuccess && bridgeGame.randomBridge.length === bridgeGame.index) {
      OutPutView.printResult(bridgeGame);
      return;
    }
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (command) => {
      bridgeGame.move(command);
      OutPutView.printMap(bridgeGame.upperBridge, bridgeGame.lowerBridge);
      bridgeGame.isSuccess ? this.readMoving() : this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (command) => {
      this.onErrorHandler(command !== "R" && command !== "Q", ERROR.RETRY_COMMAND, () => this.readGameCommand());
      if (command === "R") {
        bridgeGame.retry(() => this.readMoving());
      }
      if (command === "Q") {
        OutPutView.printResult(bridgeGame);
      }
    });
  },
};

module.exports = InputView;
