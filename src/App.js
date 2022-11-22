const InputHandler = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const MakeRandomValue = require('./BridgeRandomNumberGenerator');

class App{
  play() {
    let bridge = this.buildBridge();
  }

  buildBridge() {
    let inputBridgeSize = InputHandler.readBridgeSize();
    let bridge = BridgeMaker.makeBridge(inputBridgeSize, MakeRandomValue.generate);

    return bridge;
  }
}

// const app = new App();
// app.play();

module.exports = App;
