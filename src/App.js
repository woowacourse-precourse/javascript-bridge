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
    InputView.readBridgeSize(this.enterBridgeSizeByCB.bind(this));
  }

  enterBridgeSizeByCB(sizeStr) {
    validateBrigeSize(+sizeStr);
    this.bridgeGame.setSize(+sizeStr);
  }
}

module.exports = App;

const app = new App();
app.play();
