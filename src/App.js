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
      this.controlBridges(bridgeSize);
    });
  }

  controlBridges(bridgeSize) {
    const bridges = BridgeMaker.makeBridge(bridgeSize, generate);
    this.bridgeGame = new BridgeGame(bridges);
    this.controlMoving();
  }

  controlMoving() {
    InputView.readMoving((moving) => {
      let isMoving = this.bridgeGame.move(moving);
      this.controlResult(isMoving);
    });
  }

  controlResult(isMoving) {
    const bridges = this.bridgeGame.getBridges();
    const movements = this.bridgeGame.getMovements();
    const map = this.mapMaker.makeMap(bridges, movements, isMoving);
    OutputView.printMap(map);
    let isEnd = this.bridgeGame.isEnd();
    if (isEnd) this.controlEnd();
    else if (!isMoving) this.controlRetry();
    else this.controlMoving();
  }

  controlRetry() {
    console.log("controlRetry");
    InputView.readGameCommand((gameCommand) => {
      if (gameCommand === WORD.RETRY) {
        this.mapMaker.resetMap();
        this.bridgeGame.retry();
        this.controlMoving();
      } else this.controlEnd();
    });
  }

  controlEnd() {
    const map = this.mapMaker.getResultMap();
    const isSuccess = this.bridgeGame.isSuccess();
    const numberOfTry = this.bridgeGame.getNumberOfTry();
    OutputView.printResult(map, isSuccess, numberOfTry);
  }
}

const app = new App();
app.play();

module.exports = App;
