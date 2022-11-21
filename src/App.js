const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

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
      this.getBridge(bridgeSize);
      this.getMoving();
    });
  }

  getBridge(bridgeSize) {
    const bridges = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    console.log("(확인용) bridges: ", bridges);
  }

  getMoving() {
    InputView.readMoving((moving) => {
      console.log("(callback 확인용) moving: ", moving);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
