const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
class App {
  bridgeGame;

  play() {
    OutputView.printGreeting();
    this.bridgeGame = this.makeBridgeGame();
  }

  makeBridgeGame() {
    const bridge = BridgeMaker.makeBridge(
      InputView.readBridgeSize(),
      BridgeRandomNumberGenerator.generate(),
    );
    return new BridgeGame(bridge);
  }

  progressGame(bridgeGame) {
    let isContinue = true;
    let trialCount = 1;
    let isSuccess;
    while (isContinue) {
      trialCount += 1;
      isSuccess = this.progressTrial(bridgeGame);
      isContinue = this.getRetry(isSuccess, bridgeGame);
    }

    return [isSuccess, trialCount];
  }

  progressTrial(bridgeGame) {
    let isSuccess = true;
    while (isSuccess) {
      isSuccess = this.progressGame;
      OutputView.printMap(bridgeGame, isSuccess);
    }
    return isSuccess;
  }

  getRetry(isSuccess, bridgeGame) {
    if (isSuccess) {
      return false;
    }
    const command = InputView.readGameCommand();
    const isContinue = bridgeGame.retry(command);
    return isContinue;
  }

  progressMoving(bridgeGame) {
    const moving = InputView.readMoving();
    const isSuccess = bridgeGame.move(moving);
    return isSuccess;
  }
}

const app = new App();
app.play();

module.exports = App;
