const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.moveableOfBridge = [];
  }

  play() {
    OutputView.playGame();
    this.moveableOfBridge = InputView.readBridgeSize(this.makeBridge);
  }
  makeBridge(size) {
    return BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
}

const app = new App();
app.play();

module.exports = App;
