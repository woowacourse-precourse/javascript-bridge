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

  readBridgeSize() {
    let randomBridge;

    Console.print("다리 건너기 게임을 시작합니다.\n");
    Console.readLine("다리의 길이를 입력해주세요.\n", (aNumber) => {
      if (isNaN(aNumber)) {
        throw new Error(ERROR.NOT_A_NUMBER);
      }

      randomBridge = BridgeMaker.makeBridge(Number(aNumber), () => generate());
      bridgeGame.makeRandomBridge(randomBridge);

      this.readMoving(randomBridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  nextStep(randomBridge, upperBridge, lowerBridge) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (command) => {
      if (command !== "U" && command !== "D") throw new Error(ERROR.UP_DOWN_COMMAND);
      if (randomBridge[bridgeGame.index] === command) {
        if (command === "U") {
          upperBridge.push("O");
          lowerBridge.push(" ");
          bridgeGame.increaseIndex();

          OutPutView.printMap(upperBridge, lowerBridge);

          this.nextStep(randomBridge, upperBridge, lowerBridge);
        }
        if (command === "D") {
          upperBridge.push(" ");
          lowerBridge.push("O");
          bridgeGame.increaseIndex();

          OutPutView.printMap(upperBridge, lowerBridge);

          this.nextStep(randomBridge, upperBridge, lowerBridge);
        }
      } else {
        if (command === "U") {
          upperBridge.push("X");
          lowerBridge.push(" ");

          OutPutView.printMap(upperBridge, lowerBridge);

          this.readGameCommand();
          bridgeGame.retry();
        }
        if (command === "D") {
          upperBridge.push(" ");
          lowerBridge.push("X");

          OutPutView.printMap(upperBridge, lowerBridge);

          this.readGameCommand();
          bridgeGame.retry();
        }
      }
    });
  },

  readMoving() {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (command) => {
      bridgeGame.move(command);
      OutPutView.printMap(bridgeGame.upperBridge, bridgeGame.lowerBridge);
      Console.print(bridgeGame.isCorrect);
      bridgeGame.isCorrect ? this.readMoving() : this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (command) => {
      if (command === "R") {
        bridgeGame.retry(this.nextStep());
      }
    });
  },
};

module.exports = InputView;
