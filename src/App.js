const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { validateBrigeSize, validateMoving } = require("./util/validate");

class App {
  bridgeGame = null;
  pathIdx = 0;
  tryCount = 0;

  play() {
    this.start();
  }

  start() {
    this.bridgeGame = new BridgeGame();

    OutputView.printStart();
    InputView.readBridgeSize(this.cbAfterReadBridgeSize.bind(this));
  }

  cbAfterReadBridgeSize(sizeStr) {
    const size = +sizeStr;

    validateBrigeSize(size);
    this.bridgeGame.setSize(size).setBridge();

    this.proceedGame();
  }

  proceedGame() {
    InputView.readMoving(this.cbAfterReadMoving.bind(this));
  }

  cbAfterReadMoving(choice) {
    validateMoving(choice);

    const isAlrightPath = this.bridgeGame.getIsAlrightPath(
      this.pathIdx++,
      choice
    );

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
    return !isAlrightPath || this.pathIdx >= this.bridgeGame.size;
  }

  stopGame() {
    InputView.readGameCommand(this.cbAfterStopGame.bind(this));
  }

  cbAfterStopGame(choice) {
    console.log("choice", choice);
  }
}

module.exports = App;

const app = new App();
app.play();
