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

  compareInputScore(bridgeSize,bridgeBase) {
    let count=0;
    for(let index=0; index<bridgeSize; index++){
      count++;
      if(this.checkRightPlace(bridgeBase[index])) {
        this.successPlace(bridgeBase[index],count)}
      else {
        return this.failPlace(bridgeBase[index]);
      }
    }
    this.checkRestart();
  }

  checkRightPlace(bridge){
    const bg=new BridgeGame();
    if(bg.move(bridge,readMoving())){
      return true;
    }
  }

}

module.exports = App;
