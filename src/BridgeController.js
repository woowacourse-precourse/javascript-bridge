const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./Validation");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const { JUDGEMENT } = require("./data/Constants");

const bridgeGame = new BridgeGame(0, [[], []], 1);

class BridgeController {
  gameStart() {
    OutputView.bridgeGameStart();
    this.getUserBridgeSize();
  }

  getUserBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      OutputView.lineBreak();

      if (this.checkBridgeLength(bridgeSize) !== JUDGEMENT.ERROR) {
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

      return JUDGEMENT.ERROR;
    }
  }

  creatBridge(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    Console.print(bridge);

    return bridge;
  }

  getUserMove(bridge) {
    InputView.readMoving((move) => {
      if (this.checkUserMove(move, bridge) !== JUDGEMENT.ERROR) {
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

      return JUDGEMENT.ERROR;
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
    OutputView.printResult(
      bridgeGameResult,
      JUDGEMENT.SUCCESS,
      bridgeGame.getTryCount()
    );
  }

  checkUserRetry(userRetry, bridge, bridgeGameResult) {
    try {
      Validation.checkRetry(userRetry);
    } catch (error) {
      Console.print(error);
      this.getUserRetry(bridge, bridgeGameResult);

      return JUDGEMENT.ERROR;
    }
  }

  getUserRetry(bridge, bridgeGameResult) {
    InputView.readGameCommand((userRetry) => {
      if (
        this.checkUserRetry(userRetry, bridge, bridgeGameResult) !==
        JUDGEMENT.ERROR
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
    OutputView.printResult(
      bridgeGameResult,
      JUDGEMENT.FAIL,
      bridgeGame.getTryCount()
    );
  }
}

module.exports = BridgeController;
