const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./Validation");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

const bridgeGame = new BridgeGame({
  indexCount: 0,
  gameResult: [[], []],
  tryCount: 1,
});

class BridgeController {
  gameStart() {
    OutputView.bridgeGameStart();
    this.getUserBridgeLength();
  }

  getUserBridgeLength() {
    InputView.readBridgeSize((bridgeLength) => {
      if (this.checkBridgeLength(bridgeLength) !== false) {
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

      return false;
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

      return false;
    }
  }

  getUserMove(bridge) {
    OutputView.lineBreak();
    InputView.readMoving((move) => {
      if (this.checkUserMove(move, bridge) !== false) {
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
    OutputView.lineBreak();

    OutputView.printResult({
      bridgeGameResult: passBridgeResult,
      successOrFail: "성공",
      tryCount: bridgeGame.getTryCount(),
    });
  }

  checkUserRetry(userRetry, bridge, passBridgeResult) {
    try {
      Validation.checkRetry(userRetry);
    } catch (error) {
      Console.print(error);
      this.getUserRetry(bridge, passBridgeResult);

      return false;
    }
  }

  getUserRetry(bridge, passBridgeResult) {
    InputView.readGameCommand((userRetry) => {
      if (this.checkUserRetry(userRetry, bridge, passBridgeResult) !== false) {
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
    OutputView.printResult({
      bridgeGameResult: passBridgeResult,
      successOrFail: "실패",
      tryCount: bridgeGame.getTryCount(),
    });
  }
}

module.exports = BridgeController;
