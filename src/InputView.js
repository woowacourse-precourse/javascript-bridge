const { Console } = require("@woowacourse/mission-utils");
const ERROR = require("../utils/constant");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

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
      Console.print(randomBridge);
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
          //OutPutView
          Console.print(upperBridge);
          Console.print(lowerBridge);
          //
          this.nextStep(randomBridge, upperBridge, lowerBridge);
        }
        if (command === "D") {
          upperBridge.push(" ");
          lowerBridge.push("O");
          bridgeGame.increaseIndex();
          //OutPutView
          Console.print(upperBridge);
          Console.print(lowerBridge);
          //
          this.nextStep(randomBridge, upperBridge, lowerBridge);
        }
      } else {
        if (command === "U") {
          upperBridge.push("X");
          lowerBridge.push(" ");
          //OutPutView
          Console.print(upperBridge);
          Console.print(lowerBridge);
          //
          this.readGameCommand();
          bridgeGame.retry();
        }
        if (command === "D") {
          upperBridge.push(" ");
          lowerBridge.push("X");
          //OutPutView
          Console.print(upperBridge);
          Console.print(lowerBridge);
          //
          this.readGameCommand();
          bridgeGame.retry();
        }
      }
    });
  },

  readMoving(randomBridge) {
    const upperBridge = [];
    const lowerBridge = [];
    this.nextStep(randomBridge, upperBridge, lowerBridge);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
