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
    const { upBridgeRecord, downBridgeRecord, fail } = this.bridgeGame.move(direction);
    this.printBridge(upBridgeRecord, downBridgeRecord, fail);
  }
  inputReplay() {
    InputView.readReplay(this.checkReplay.bind(this));
  }
  printBridge(upBridgeRecord, downBridgeRecord, fail) {
    OutputView.printBridge(upBridgeRecord, downBridgeRecord);
    if (fail) return this.inputReplay();
    if (!fail) return this.inputMoving();
  }
  checkReplay(replayComment) {
    console.log(replayComment);
  }
}

const app = new App();
app.play();

module.exports = App;
