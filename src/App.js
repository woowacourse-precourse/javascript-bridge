const { Console } = require("@woowacourse/mission-utils");
const IOHandler = require("./IOHandler");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.gameManager = new BridgeGame();
  }
  play() {
    this.start();
    this.startGame();
  }
  start() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  }
  startGame() {
    IOHandler.readBridgeSize((size) => {
      this.gameManager.size = +size;
      this.makeBridge();
      this.readMoving();
    });
  }
  makeBridge() {
    this.gameManager.bridge = BridgeMaker.makeBridge(this.gameManager.size, BridgeRandomNumberGenerator.generate);
  }
  readMoving() {
    IOHandler.readMoving((moving) => {
      const movingResult = this.gameManager.move(this.gameManager.bridge, this.gameManager.currentPosition, moving);
      this.gameManager.resultMap.push(this.handleResultMap(moving, movingResult));
      IOHandler.printMap(this.gameManager.resultMap);
      this.checkArrival(movingResult);
    });
  }
  checkArrival(result) {
    if (result && this.gameManager.currentPosition < this.gameManager.size) {
      this.readMoving();
      return;
    }
    if (this.gameManager.currentPosition === this.gameManager.size) {
      this.printResult(result);
      return;
    }
    this.readGameCommand(result);
  }
  handleResultMap(moving, result) {
    return {
      moving,
      result,
    };
  }
  readGameCommand(result) {
    IOHandler.readGameCommand((command) => {
      if (command === "Q") {
        this.printResult(result);
        return;
      }
      this.gameManager.retry();
      this.readMoving();
    });
  }
  printResult(result) {
    IOHandler.printResult(result, this.gameManager.tryCount, this.gameManager.resultMap);
    Console.close();
  }
}

module.exports = App;

const app = new App();
app.play();
