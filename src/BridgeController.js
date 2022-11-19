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
    this.getUserBridgeSize();
  }

  getUserBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      OutputView.lineBreak();

      if (this.checkBridgeLength(bridgeSize) !== "에러발생") {
        const bridge = this.creatBridge(bridgeSize);

        this.getUserMove(bridge);
      }
    });
  }

  checkBridgeLength(bridgeSize) {
    try {
      Validation.checkBridgeLength(bridgeSize);
    } catch (error) {
      Console.print(error);
      this.getUserBridgeSize();

      return "에러발생";
    }
  }

  creatBridge(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );

    return bridge;
  }

  getUserMove(bridge) {
    InputView.readMoving((move) => {
      if (this.checkUserMove(move, bridge) !== "에러발생") {
        this.judgementAndShow(bridge, move);
      }
    });
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

  judgementAndShow(bridge, move) {
    const passBridgeOrNot = bridgeGame.move(bridge, move);
    const bridgeGameResult = bridgeGame.getResult();

    OutputView.printMap(bridgeGameResult);
    if (this.completeGame(passBridgeOrNot, bridgeGameResult, bridge) !== true) {
      this.passOrNot(passBridgeOrNot, bridgeGameResult, bridge);
    }
  }

  completeGame(passBridgeOrNot, bridgeGameResult, bridge) {
    if (
      passBridgeOrNot === true &&
      bridgeGameResult[0].length === bridge.length
    ) {
      this.gameEnd(bridgeGameResult);

      return true;
    }
  }

  passOrNot(passBridgeOrNot, bridgeGameResult, bridge) {
    if (passBridgeOrNot === false) {
      this.getUserRetry(bridge, bridgeGameResult);
    }
    if (passBridgeOrNot === true) {
      this.getUserMove(bridge);
    }
  }

  gameEnd(bridgeGameResult) {
    OutputView.printResult(bridgeGameResult, "성공", bridgeGame.getTryCount());
  }

  checkUserRetry(userRetry, bridge, bridgeGameResult) {
    try {
      Validation.checkRetry(userRetry);
    } catch (error) {
      Console.print(error);
      this.getUserRetry(bridge, bridgeGameResult);

      return "에러발생";
    }
  }

  getUserRetry(bridge, bridgeGameResult) {
    InputView.readGameCommand((userRetry) => {
      if (
        this.checkUserRetry(userRetry, bridge, bridgeGameResult) !== "에러발생"
      ) {
        this.judgementRetry(bridge, bridgeGameResult, userRetry);
      }
    });
  }

  judgementRetry(bridge, bridgeGameResult, userRetry) {
    if (bridgeGame.retry(userRetry) === true) {
      this.gameRetry(bridge);
    }
    if (bridgeGame.retry(userRetry) === false) {
      this.gameGiveUp(bridgeGameResult);
    }
  }

  gameRetry(bridge) {
    bridgeGame.reset();
    this.getUserMove(bridge);
  }

  gameGiveUp(bridgeGameResult) {
    OutputView.printResult(bridgeGameResult, "실패", bridgeGame.getTryCount());
  }
}

module.exports = BridgeController;
