const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");

class App {

  constructor() {
    this.brideGame = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.tryBuildBridge.bind(this));
  }

  tryBuildBridge(size) {
    try {
      this.brideGame.ready(size);
    } catch(error) {
      this.retryRequestBridgeSize();
    }
  }

  retryRequestBridgeSize() {
    OutputView.printValidateSizeError();
    this.requestBridgeSize();
  }

}

const app = new App();
app.play();

module.exports = App;
