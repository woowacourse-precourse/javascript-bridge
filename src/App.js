const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");

class App {
  constructor() {
    this.bridgeGame;
  }
  play() {
    this.startBridgeGame();
  }

  startBridgeGame() {
    OutputView.printStartMessage();
    this.controlBridgeSize();
  }

  controlBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      console.log("(callback 확인용) bridgeSize: ", bridgeSize);
      this.controlBridges(bridgeSize);
      this.controlMoving();
    });
  }

  controlBridges(bridgeSize) {
    const bridges = BridgeMaker.makeBridge(bridgeSize, generate);
    this.bridgeGame = new BridgeGame(bridges);
    console.log("(확인용) bridges: ", this.bridgeGame.getBridges());
    this.controlMoving;
  }

  controlMoving() {
    InputView.readMoving((moving) => {
      console.log("(callback 확인용) moving: ", moving);
      let isMoving = this.bridgeGame.move(moving);
      console.log("(확인용) isMoving: ", isMoving);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
