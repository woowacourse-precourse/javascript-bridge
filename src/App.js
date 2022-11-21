const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const { COMMAND } = require('./constants/bridge');

class App {
  constructor() {
    this.bridgeModel = new BridgeGame();
    this.bridgeIdx = 0;
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.setBridgeRoutine.bind(this));
  }

  setBridgeRoutine(bridgeSize) {
    this.bridgeModel.setBridge(bridgeSize);
    this.attemptRoutine();
  }

  attemptRoutine() {
    InputView.readMoving(this.setMovingRoutine.bind(this));
  }

  setMovingRoutine(input) {
    const result = this.bridgeModel.move(input, this.bridgeIdx);
    const { moveResult, isSuccess, upDownCounter } = result;
    this.bridgeIdx += 1;

    OutputView.printMap(upDownCounter[0], upDownCounter[1]);
    if (isSuccess) return this.endGameRoution(upDownCounter);
    if (!moveResult) return InputView.readGameCommand(this.failRoutine.bind(this));
    this.attemptRoutine();
  }

  failRoutine(command) {
    if (command === COMMAND.RETRY) return this.retryRoutine();
    this.endGameRoution(this.bridgeModel.getUpDownCounter());
  }

  endGameRoution(upDownCounter) {
    const finalResult = {
      upDownCounter,
      isSuccess: this.bridgeModel.isSuccess ? '성공' : '실패',
      trial: this.bridgeModel.trial,
    };

    OutputView.printResult(finalResult);
  }

  retryRoutine() {
    this.reset();
    this.attemptRoutine();
  }

  reset() {
    this.bridgeIdx = 0;
    this.bridgeModel.retry();
  }
}

const app = new App();
app.play();

module.exports = App;
