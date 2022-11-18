const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const Intercessor = {

  startGame() {
    OutputView.printGameStart();
  },

  bridgeMake() {
    let bridge;
    try {
      const bridgeSize = InputView.readBridgeSize();
      bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    } catch (error) {
      OutputView.printExceptionBridgeSize(error);
    }
    return bridge;
  },

  matchMove(bridge){
    for(let i = 0; i < bridge.length; i++){
      if(!this.matchOneStep(bridge[i])) return false;
    }
    return true;
  },

  matchOneStep(block){
    let moving;
    const bridgeGame = new BridgeGame();
    try{
      moving = InputView.readMoving();
      if(!bridgeGame.move(moving, block)) {
        bridgeGame.printCurrent(moving, false);
        return false;
      }
      bridgeGame.printCurrent(moving, true);
    } catch(error){
      console.log(error);
    }
  }
}

module.exports = Intercessor;
