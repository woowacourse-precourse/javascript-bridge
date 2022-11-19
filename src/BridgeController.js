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
    OutputView.bridgeGameStart();
    this.getUserBridgeLength();
  }

  getUserBridgeLength() {
    InputView.readBridgeSize((bridgeLength) => {
      OutputView.lineBreak();

      if (this.checkBridgeLength(bridgeLength) !== "에러발생") {
        const bridge = this.creatBridge(bridgeLength);

        this.getUserMove(bridge);
      }
    });
  }

  checkBridgeLength(bridgeLength) {
    try {
      Validation.checkBridgeLength(bridgeLength);
    } catch (error) {
      Console.print(error);
      this.getUserBridgeLength();

      return "에러발생";
    }
  }

  creatBridge(bridgeLength) {
    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    return bridge;
  }

  checkUserMove(move, bridge) {
    try {
      Validation.checkMove(move);
    } catch (error) {
      Console.print(error);
      this.getUserMove(bridge);

      return "에러발생";
    }
  }

  getUserMove(bridge) {
    InputView.readMoving((move) => {
      if (this.checkUserMove(move, bridge) !== "에러발생") {
        this.judgementAndShow(bridge, move);
      }
    });
  }

  judgementAndShow(bridge, move) {
    const passBridge = bridgeGame.move(bridge, move);
    const passBridgeResult = bridgeGame.getResult();

    OutputView.printMap(passBridgeResult);
    if (this.successGame(passBridge, passBridgeResult, bridge) !== true) {
      this.passOrNot(passBridge, passBridgeResult, bridge);
    }
  }

  successGame(passBridge, passBridgeResult, bridge) {
    if (passBridge === true && passBridgeResult[0].length === bridge.length) {
      this.gameEndPoint(passBridgeResult);

      return true;
    }
  }

  passOrNot(passBridge, passBridgeResult, bridge) {
    if (passBridge === false) {
      this.getUserRetry(bridge, passBridgeResult);
    }
    if (passBridge === true) {
      this.getUserMove(bridge);
    }
  }

  gameEndPoint(passBridgeResult) {
    OutputView.printResult(passBridgeResult, "성공", bridgeGame.getTryCount());
  }

  checkUserRetry(userRetry, bridge, passBridgeResult) {
    try {
      Validation.checkRetry(userRetry);
    } catch (error) {
      Console.print(error);
      this.getUserRetry(bridge, passBridgeResult);

      return "에러발생";
    }
  }

  getUserRetry(bridge, passBridgeResult) {
    InputView.readGameCommand((userRetry) => {
      if (
        this.checkUserRetry(userRetry, bridge, passBridgeResult) !== "에러발생"
      ) {
        this.judgementRetry(bridge, passBridgeResult, userRetry);
      }
    });
  }

  judgementRetry(bridge, passBridgeResult, userRetry) {
    if (bridgeGame.retry(userRetry) === true) {
      this.gameRetry(bridge);
    }
    if (bridgeGame.retry(userRetry) === false) {
      this.renderResult(passBridgeResult);
    }
  }

  gameRetry(bridge) {
    bridgeGame.reset();
    this.getUserMove(bridge);
  }

  renderResult(passBridgeResult) {
    OutputView.printResult(passBridgeResult, "실패", bridgeGame.getTryCount());
  }
}

module.exports = BridgeController;
