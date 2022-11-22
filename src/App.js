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
    this.gameStart();
  }

  gameStart() {
    this.makeBridgeBase();
  }

  checkRestart() {
    if(readGameCommand() == 'R') {
      resetBridge();
      this.bridgeTransfer();
    } 
    else {
      printResult('fail');
      this.gameEnd();
    }
  }

  failPlace(inputMove) {
    if(inputMove == 'U'){
      printFail(MESSAGE.bridge.bridgeNone, MESSAGE.bridge.bridgeNo);
      this.checkRestart();
    }
    else if(inputMove == 'D') {
      printFail(MESSAGE.bridge.bridgeNo, MESSAGE.bridge.bridgeNone);
      this.checkRestart();
    }
  }

  successPlace(inputMove, count){
    if(inputMove == 'U'){
      let upMessage = [MESSAGE.bridge.bridgeOkay,MESSAGE.bridge.bridgeNone]
      printBridgeMap(upMessage, count, bridgeSize);
    }
    else if(inputMove =='D') {
      let downMessage = [MESSAGE.bridge.bridgeNone, MESSAGE.bridge.bridgeOkay]
      printBridgeMap(downMessage, count, bridgeSize);
    }
  }

  gameEnd() {
    resetCount();
    Console.close();
  }

  makeBridgeBase() {
    bridgeSize = readBridgeSize()
    bridgeBase = makeBridge(bridgeSize, generate);
    this.bridgeTransfer();
  }

  bridgeTransfer(){
    this.compareInputScore(bridgeSize, bridgeBase);
  }

  compareInputScore(bridgeSize, bridgeBase) {
    let count = 0;
    for(let index = 0; index < bridgeSize; index++){
      count++;
      if(this.checkRightPlace(bridgeBase[index])) {
        this.successPlace(bridgeBase[index], count)}
      else {
        return this.failPlace(bridgeBase[index]);
      }
    }
    this.checkRestart();
  }

  checkRightPlace(bridge){
    const bg = new BridgeGame();
    if(bg.move(bridge, readMoving())){
      return true;
    }
  }

}

module.exports = App;
