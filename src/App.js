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
    if (this.checkEndGame(isAlrightPath)) {
      return this.stopGame();
    }
    return this.proceedGame();
  }

  checkEndGame(isAlrightPath) {
    return !isAlrightPath || this.bridgeGame.checkIsEndBridge();
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
      return this.bridgeGame.end();
    }
  }
}

module.exports = App;

const app = new App();
app.play();
