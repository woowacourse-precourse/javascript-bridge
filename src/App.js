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
    const { fail, success } = this.bridgeGame.move(direction);
    if (success) return this.printSuccess();
    this.printBridge();
    this.checkFail(fail);
  }
  inputReplay() {
    InputView.readReplay(this.checkReplay.bind(this));
  }
  checkFail(fail) {
    if (fail) return this.inputReplay();
    if (!fail) return this.inputMoving();
  }
  printBridge() {
    const { upBridgeRecord, downBridgeRecord } = this.bridgeGame.getBridgeRecord();
    OutputView.printBridge(upBridgeRecord, downBridgeRecord);
  }
  checkReplay(replayComment) {
    const FAIL_COMMENT = '실패';
    if (replayComment === 'R') return this.bridgeGame.retry(this.inputMoving.bind(this));
    if (replayComment === 'Q') {
      this.printBridge();
      OutputView.printResult(tryCount, FAIL_COMMENT);
    }
  }
  printSuccess() {
    const SUCCESS_COMMENT = '성공';
    const tryCount = this.bridgeGame.getTryCount();
    this.printBridge();
    OutputView.printResult(tryCount, SUCCESS_COMMENT);
  }
}

const app = new App();
app.play();

module.exports = App;
