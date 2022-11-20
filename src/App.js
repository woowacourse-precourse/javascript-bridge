const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  start() {
    OutputView.printStart();
    InputView.readBridgeSize(this);
  }
  init(bridgeSize){
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    //test
    console.log(bridge);
  }
  play() {
    this.start();
  }
}

module.exports = App;

//test app
const app = new App();
app.play();