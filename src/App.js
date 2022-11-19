const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { GAME_PROCEED } = require("./util/game");
const { validateBrigeSize, validateMoving } = require("./util/validate");

class App {
  bridgeGame = null;
  tryCount = 1;

  play() {
    this.start();
  }

  start() {
    this.bridgeGame = new BridgeGame();

    OutputView.printStart();
    InputView.readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(sizeStr) {
    const size = +sizeStr;

    validateBrigeSize(size);
    this.bridgeGame.setSize(size).setBridge();

    this.proceedGame();
  }

  proceedGame() {
    InputView.readMoving(this.onReadMoving.bind(this));
  }

  onReadMoving(choice) {
    validateMoving(choice);

    const isAlrightPath = this.bridgeGame.getIsAlrightPath(choice);

    this.bridgeGame.move(choice, isAlrightPath);
    this.goNextStepAfterReadMoving(isAlrightPath);
  }

  goNextStepAfterReadMoving(isAlrightPath) {
    if (!isAlrightPath) {
      return this.stopGame();
    }
    if (this.bridgeGame.checkIsEndBridge()) {
      return OutputView.printResult(true, this.tryCount);
    }
    return this.proceedGame();
  }

  stopGame() {
    InputView.readGameCommand(this.onStopGame.bind(this));
  }

  onStopGame(choice) {
    if (choice === GAME_PROCEED.retry) {
      this.bridgeGame.retry();
      this.tryCount += 1;
      return this.proceedGame();
    }
    if (choice === GAME_PROCEED.quit) {
      this.bridgeGame.end();
      return OutputView.printResult(false, this.tryCount);
    }
  }
}

module.exports = App;

const app = new App();
app.play();
