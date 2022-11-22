const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const {
  readBridgeSize,
  readMoving,
  readGameCommand,
} = require("./view/InputView");
const { Console } = require("@woowacourse/mission-utils");
const {
  printFail,
  printBridgeMap,
  resetBridge,
  printResult,
  resetCount,
} = require("./view/OutputView");
const BridgeGame = require("./BridgeGame");
const REQUIREMENT = require("./util/constant");
let bridgeSize, bridgeBase;
class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    this.makeBridgeBase();
  }

  checkRestart() {
    if (readGameCommand() == "R") {
      resetBridge();
      this.bridgeTransfer();
    } else {
      printResult("fail");
      this.gameEnd();
    }
  }

  failPlace(inputMove) {
    if (inputMove == "U") {
      printFail(REQUIREMENT.bridge.None, REQUIREMENT.bridge.No);
      this.checkRestart();
    } else if (inputMove == "D") {
      printFail(REQUIREMENT.bridge.No, REQUIREMENT.bridge.None);
      this.checkRestart();
    }
  }

  successPlace(inputMove, count) {
    if (inputMove == "U") {
      let upMessage = [REQUIREMENT.bridge.Ok, REQUIREMENT.bridge.None];
      printBridgeMap(upMessage, count, bridgeSize);
    } else if (inputMove == "D") {
      let downMessage = [REQUIREMENT.bridge.None, REQUIREMENT.bridge.Ok];
      printBridgeMap(downMessage, count, bridgeSize);
    }
  }

  gameEnd() {
    resetCount();
    Console.close();
  }

  makeBridgeBase() {
    bridgeSize = readBridgeSize();
    bridgeBase = makeBridge(bridgeSize, generate);
    this.bridgeTransfer();
  }

  bridgeTransfer() {
    this.compareInputScore(bridgeSize, bridgeBase);
  }

  compareInputScore(bridgeSize, bridgeBase) {
    let count = 0;
    for (let index = 0; index < bridgeSize; index++) {
      count++;
      if (this.checkRightPlace(bridgeBase[index])) {
        this.successPlace(bridgeBase[index], count);
      } else {
        return this.failPlace(bridgeBase[index]);
      }
    }
    this.checkRestart();
  }

  checkRightPlace(bridge) {
    const bridgegame = new BridgeGame();
    if (bridgegame.move(bridge, readMoving())) {
      return true;
    }
  }
}

module.exports = App;
