const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    this.startBridgeGame();
  }

  startBridgeGame() {
    OutputView.printStartMessage();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      console.log("(callback 확인용) bridgeSize: ", bridgeSize);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
