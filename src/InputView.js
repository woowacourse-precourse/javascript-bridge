const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputCheck = require("./inputCheck");
const OutputView = require("./OutputView");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      InputCheck.checkBridgeSize(inputBridgeSize);
      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      let bridgeList = [[], []];
      this.readMoving(bridge, bridgeList);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, bridgeList) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (inputBridgeChoice) => {
        InputCheck.checkMoving(inputBridgeChoice);
        const bridgeGamge = new BridgeGame();
        const movingResult = bridgeGamge.move(
          inputBridgeChoice,
          bridge,
          bridgeList
        );
        if (movingResult[0].includes("X") || movingResult[1].includes("X")) {
          return this.readGameCommand(bridge);
        }
        return this.readMoving(bridge, movingResult);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (choice) => {
        InputCheck.checkRestart(choice);

        const restart = "R";
        const quit = "Q";

        if (choice === restart) {
          const bridgeGame = new BridgeGame();
          const resetBridgeList = bridgeGame.retry(bridge);
          return this.readMoving(bridge, resetBridgeList);
        }
        if (choice === quit) {
          Console.print("게임 종료");
        }
      }
    );
  },
};

module.exports = InputView;
