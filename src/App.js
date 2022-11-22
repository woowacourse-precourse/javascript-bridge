const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { Console } = require('@woowacourse/mission-utils');
const { printFail, printBridgeMap, resetBridge, printResult, resetCount } = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const MESSAGE = require("./message");
let bridgeSize,bridgeBase;
class App {
  play() {

  }


  makeBridgeBase() {
    bridgeSize=readBridgeSize()
    bridgeBase=makeBridge(bridgeSize,generate);
    this.bridgeTransfer();
  }

  bridgeTransfer(){
    this.compareInputScore(bridgeSize,bridgeBase);
  }

}

module.exports = App;
