const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { generateRandomNumber } = require("./util/randomNumber");
const { validateBrigeSize } = require("./util/validate");

class App {
  bridgeGame = null;
  bridgePath = null;

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
    this.bridgeGame.setSize(size);
    this.bridgePath = BridgeMaker.makeBridge(size, generateRandomNumber);

    this.proceedGame();
  }

  proceedGame() {
    InputView.readMoving(this.cbAfterReadMoving.bind(this));
  }

  cbAfterReadMoving(choice) {
    validateMoving(choice);
  }
}

module.exports = App;

const app = new App();
app.play();
