const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { validateBrigeSize, validateMoving } = require("./util/validate");

class App {
  bridgeGame = null;
  pathIdx = 0;

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
    const isAlright = this.bridgeGame.checkIsAlrightPath(this.pathIdx, choice);

    console.log("isAlright", isAlright);
    this.bridgeGame.move();
    this.pathIdx += 1;
  }
}

module.exports = App;

const app = new App();
app.play();
