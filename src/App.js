const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { validateBrigeSize } = require("./util/validate");

class App {
  bridgeGame = null;

  play() {
    this.start();
  }

  start() {
    this.bridgeGame = new BridgeGame();

    OutputView.printStart();
    InputView.readBridgeSize(this.cbAfterReadBridgeSize.bind(this));

    return this;
  }

  cbAfterReadBridgeSize(sizeStr) {
    validateBrigeSize(+sizeStr);
    this.bridgeGame.setSize(+sizeStr);

    this.proceedGame();
  }

  proceedGame() {
    InputView.readMoving(this.cbAfterReadMoving.bind(this));
  }

  cbAfterReadMoving(choice) {
    validateMoving(choice);
    console.log("choice", choice);
  }
}

module.exports = App;

const app = new App();
app.play();
