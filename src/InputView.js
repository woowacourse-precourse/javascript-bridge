const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputCheck = require("./inputCheck");
const OutputView = require("./OutputView");

const InputView = {
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      const inputBridgeSizeError = InputCheck.checkBridgeSize(inputBridgeSize);
      if (inputBridgeSizeError) return this.readBridgeSize();

      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      let bridgeList = [[], []];
      let attempts = 1;
      this.readMoving(bridge, bridgeList, attempts);
    });
  },

  readMoving(bridge, bridgeList, attempts) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (inputBridgeChoice) => {
        const inputBridgeChoiceError =
          InputCheck.checkMoving(inputBridgeChoice);
        if (inputBridgeChoiceError)
          return this.readMoving(bridge, bridgeList, attempts);

        const bridgeGamge = new BridgeGame();
        const movingResult = bridgeGamge.move(
          inputBridgeChoice,
          bridge,
          bridgeList
        );
        OutputView.printMap(movingResult);
        if (movingResult[0].includes("X") || movingResult[1].includes("X")) {
          return this.readGameCommand(bridgeList, bridge, attempts);
        }
        if (movingResult[0].length === bridge.length) {
          const successMessage = "성공";
          return OutputView.printResult(bridgeList, successMessage, attempts);
        }
        return this.readMoving(bridge, movingResult, attempts);
      }
    );
  },

  readGameCommand(bridgeList, bridge, attempts) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (choice) => {
        const choiceError = InputCheck.checkRestart(choice);
        if (choiceError) return this.readGameCommand(bridgeList, bridge, attempts);

        const restart = "R";
        const quit = "Q";

        if (choice === restart) {
          attempts += 1;
          const bridgeGame = new BridgeGame();
          const resetBridgeList = bridgeGame.retry();
          return this.readMoving(bridge, resetBridgeList, attempts);
        }
        if (choice === quit) {
          const failMessage = "실패";
          OutputView.printResult(bridgeList, failMessage, attempts);
        }
      }
    );
  },
};

module.exports = InputView;
