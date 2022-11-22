const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const MapMaker = require("./MapMaker");
const { WORD } = require("./Constants");

class App {
  constructor() {
    this.bridgeGame;
    this.mapMaker = new MapMaker();
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
    });
  }

  controlBridges(bridgeSize) {
    const bridges = BridgeMaker.makeBridge(bridgeSize, generate);
    this.bridgeGame = new BridgeGame(bridges);
    console.log("(확인용) bridges: ", this.bridgeGame.getBridges());
    this.controlMoving();
  }

  controlMoving() {
    InputView.readMoving((moving) => {
      console.log("(callback 확인용) moving: ", moving);
      let isMoving = this.bridgeGame.move(moving);
      console.log("(확인용) isMoving: ", isMoving);
      this.controlResult(isMoving);
    });
  }

  controlResult(isMoving) {
    const bridges = this.bridgeGame.getBridges();
    const movements = this.bridgeGame.getMovements();
    const map = this.mapMaker.makeMap(bridges, movements, isMoving);
    OutputView.printMap(map);
    let isEnd = this.bridgeGame.isEnd();
    console.log("(확인용) isEnd: ", isEnd);
    if (!isMoving) this.controlRetry();
    else if (isEnd) this.controlEnd();
    else this.controlMoving();
  }

  controlRetry() {
    console.log("controlRetry");
    InputView.readGameCommand((gameCommand) => {
      if (gameCommand === WORD.RETRY) this.bridgeGame.retry();
      else this.controlEnd();
    });
  }

  controlEnd() {}
}

const app = new App();
app.play();

module.exports = App;
