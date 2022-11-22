const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeGame = require('./BridgeGame');
const { COMMAND } = require('./constants/bridge');

class App {
  constructor() {
    this.bridgeModel = new BridgeGame();
    this.bridgeIdx = 0;
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(bridgeSize) {
    this.bridgeModel.setBridge(bridgeSize);
    this.attempt();
  }

  attempt() {
    InputView.readMoving(this.setMovingRoutine.bind(this));
  }

  setMovingRoutine(input) {
    const result = this.bridgeModel.move(input, this.bridgeIdx);
    const { moveResult, isSuccess, upDownCounter } = result;
    this.bridgeIdx += 1;

    OutputView.printMap(upDownCounter[0], upDownCounter[1]);
    if (isSuccess) return this.printResultEndGame(upDownCounter);
    if (!moveResult) return InputView.readGameCommand(this.afterFailResult.bind(this));
    this.attempt();
  }

  afterFailResult(command) {
    switch (command) {
      case COMMAND.RETRY:
        return this.retryRoutine();
      case COMMAND.QUIT:
        this.printResultEndGame(this.bridgeModel.getUpDownCounter());
    }
  }

  printResultEndGame(upDownCounter) {
    const finalResult = {
      upDownCounter,
      isSuccess: this.bridgeModel.isSuccess ? '성공' : '실패',
      trial: this.bridgeModel.trial,
    };

    OutputView.printResult(finalResult);
  }

  retryRoutine() {
    this.reset();
    this.attempt();
  }

  reset() {
    this.bridgeIdx = 0;
    this.bridgeModel.retry();
  }
}

const app = new App();
app.play();

module.exports = App;
