const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./Validation");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

const bridgeGame = new BridgeGame(0, "", 1);

class BridgeController {
  gameStart() {
    InputView.gameStart();

    InputView.readBridgeSize((bridgeLength) => {
      Validation.checkBridgeLength(bridgeLength);

      this.creatBridge(bridgeLength);
    });
  }

  creatBridge(bridgeLength) {
    const safeBridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    Console.print(safeBridge);

    this.userMove(safeBridge);
  }

  userMove(safeBridge) {
    InputView.readMoving((move) => {
      Validation.checkMove(move);

      const passOrFail = bridgeGame.move(safeBridge, move);
      const bridgeGameResult = bridgeGame.result().split("");

      if (passOrFail === false) {
        OutputView.printMap(bridgeGameResult);
        this.retryOrExit(safeBridge, bridgeGameResult);
      }
      if (passOrFail === true) {
        OutputView.printMap(bridgeGameResult);
        this.userMove(safeBridge);
      }
      this.gameEndPoint(safeBridge, bridgeGameResult);
    });
  }

  gameEndPoint(safeBridge, bridgeGameResult) {
    if (bridgeGameResult[safeBridge.length - 1] === "O") {
      OutputView.printResult(
        bridgeGameResult,
        "성공",
        bridgeGame.getTryCount()
      );
      Console.close();
      return;
    }
  }

  retryOrExit(safeBridge, bridgeGameResult) {
    InputView.readGameCommand((retryOrExit) => {
      Validation.checkRetry(retryOrExit);
      if (bridgeGame.retry(retryOrExit) === true) {
        bridgeGame.reset();
        this.userMove(safeBridge);
      }
      if (bridgeGame.retry(retryOrExit) === false) {
        OutputView.printResult(
          bridgeGameResult,
          "실패",
          bridgeGame.getTryCount()
        );
      }
    });
  }
}

module.exports = BridgeController;
