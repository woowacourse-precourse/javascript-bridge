const { readBridgeSize, readMoving } = require("./InputView");
const { gameStart, printResult } = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  moveBridge() {
    readMoving(this.readMoveCallback);
  }

  readMoveCallback = (moveValue) => {
    let [moveCount, restartCheck, tryCount, printTry] =
      this.bridgeGame.move(moveValue);
    if (moveCount <= 2) {
      this.moveBridge();
    }
  };

  play() {
    gameStart();
    readBridgeSize((bridgeLength) => {
      this.bridgeGame.createBridge(bridgeLength);
      this.moveBridge();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
