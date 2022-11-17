const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.playGame();
    this.inputBridgeSize();
  }
  inputBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }
  makeBridge(size) {
    this.bridgeGame.setBridge(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate));
    this.inputMoving();
  }
  inputMoving() {
    InputView.readMoving(this.passBridge.bind(this));
  }
  passBridge(direction) {
    const { upBridgeRecord, downBridgeRecord } = this.bridgeGame.move(direction);
    this.printBridge(upBridgeRecord, downBridgeRecord);
  }
  printBridge(upBridgeRecord, downBridgeRecord) {
    OutputView.printBridge(upBridgeRecord, downBridgeRecord);
    this.inputMoving();
  }
}

const app = new App();
app.play();

module.exports = App;
