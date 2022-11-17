const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./Validation");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

const bridgeGame = new BridgeGame(0, [[], []], 1);

class BridgeController {
  gameStart() {
    OutputView.gameStart();

    InputView.readBridgeSize((bridgeLength) => {
      Validation.checkBridgeLength(bridgeLength);

      this.creatBridge(bridgeLength);
    });
  }

  creatBridge(bridgeLength) {
    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    this.getUserMove(bridge);
  }

  getUserMove(bridge) {
    OutputView.lineBreak();
    InputView.readMoving((move) => {
      Validation.checkMove(move);

      this.judgementAndShow(bridge, move);
    });
  }

  judgementAndShow(bridge, move) {
    const passBridge = bridgeGame.move(bridge, move);
    const passBridgeResult = bridgeGame.result();
    OutputView.printMap(passBridgeResult);

    this.passOrNot(passBridge, passBridgeResult, bridge);
  }

  passOrNot(passBridge, passBridgeResult, bridge) {
    if (passBridge === false) {
      this.getUserRetry(bridge, passBridgeResult);
    }
    if (passBridge === true && passBridgeResult[0].length === bridge.length) {
      this.gameEndPoint(passBridgeResult);
      return Console.close();
    }
    if (passBridge === true) {
      this.getUserMove(bridge);
    }
  }

  gameEndPoint(passBridgeResult) {
    OutputView.lineBreak();

    OutputView.printResult(passBridgeResult, "성공", bridgeGame.getTryCount());
  }

  getUserRetry(bridge, passBridgeResult) {
    InputView.readGameCommand((userRetry) => {
      Validation.checkRetry(userRetry);

      this.judgementRetry(bridge, passBridgeResult, userRetry);
    });
  }

  judgementRetry(bridge, passBridgeResult, userRetry) {
    if (bridgeGame.retry(userRetry) === true) {
      bridgeGame.reset();
      this.getUserMove(bridge);
    }
    if (bridgeGame.retry(userRetry) === false) {
      OutputView.printResult(
        passBridgeResult,
        "실패",
        bridgeGame.getTryCount()
      );
    }
  }
}

module.exports = BridgeController;
