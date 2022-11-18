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
    let moving;
    try{
      moving = InputView.readMoving();
    } catch(error){
      console.log(error);
    }
    const bridgeGame = new BridgeGame();
    for(let i = 0; i < bridge.length; i++){
      bridgeGame.move(moving, bridge[i]);
    }
  },

  constructMap(){

  }

}

module.exports = Intercessor;
