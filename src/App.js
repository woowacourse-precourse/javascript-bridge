const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { gameStart, printResult } = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  moveBridge() {
    readMoving(this.readMoveCallback);
  }

  moveFail(tryCount, printTry) {
    readGameCommand((restart) => {
      if (this.bridgeGame.retry(restart) == "R") {
        this.moveBridge();
      } else {
        printResult("실패", tryCount, printTry);
      }
    });
  }

  moveSuccess(moveCount, tryCount, printTry) {
    if (moveCount <= 2) {
      this.moveBridge();
    } else {
      printResult("성공", tryCount, printTry);
    }
  }

  readMoveCallback = (moveValue) => {
    let [moveCount, restartCheck, tryCount, printTry] =
      this.bridgeGame.move(moveValue);
    if (restartCheck) {
      this.moveFail(tryCount, printTry);
    } else {
      this.moveSuccess(moveCount, tryCount, printTry);
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
