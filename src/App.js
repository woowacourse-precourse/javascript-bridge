const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  constructor() {
    this.bridgeGame;
  }

  play() {
    this.bridgeGame = new BridgeGame();
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
    const { upBridgeRecord, downBridgeRecord, fail, success } = this.bridgeGame.move(direction);
    if (success) return this.printSuccess();
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
    const retry = this.bridgeGame.checkReplay(replayComment);
    const tryCount = this.bridgeGame.getTryCount();
    const FAIL_COMMENT = '실패';
    if (retry) return this.play();
    if (!retry) {
      OutputView.printResult(tryCount, FAIL_COMMENT);
    }
  }
  printSuccess() {
    const SUCCESS_COMMENT = '성공';
    const tryCount = this.bridgeGame.getTryCount();
    OutputView.printResult(tryCount, SUCCESS_COMMENT);
  }
}

const app = new App();
app.play();

module.exports = App;
