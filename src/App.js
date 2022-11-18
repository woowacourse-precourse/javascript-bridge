const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");


class App {
  play() {
    OutputView.startGame();
    try{
      const bridgeSize = InputView.readBridgeSize();
      const str = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    }catch(error){
      OutputView.printExceptionBridgeSize(error);
    }
    
  }
}

module.exports = App;
