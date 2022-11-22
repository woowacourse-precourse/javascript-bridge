const { Console } = require("@woowacourse/mission-utils");
const IOHandler = require("./IOHandler");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class BridgeGame {
  constructor() {
    this.size = 0;
    this.bridge = [];
    this.currentPosition = 0;
    this.tryCount = 1;
    this.resultMap = [];
  }
  move(bridge, currentPosition, userChoice) {
    if (bridge[currentPosition] === userChoice) {
      this.currentPosition += 1;
      return true;
    }
    return false;
  }
  retry() {
    this.tryCount += 1;
    this.currentPosition = 0;
    this.resultMap = [];
  }
  start() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.startGame();
  }
  startGame() {
    IOHandler.readBridgeSize((size) => {
      this.size = +size;
      this.bridge = this.makeBridge();
      this.readMoving();
    });
  }
  makeBridge() {
    return BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate);
  }
  readMoving() {
    IOHandler.readMoving((moving) => {
      const movingResult = this.move(this.bridge, this.currentPosition, moving);
      this.resultMap.push(this.handleResultMap(moving, movingResult));
      IOHandler.printMap(this.resultMap);
      this.checkArrival(movingResult);
    });
  }
  checkArrival(result) {
    if (result && this.currentPosition < this.size) {
      this.readMoving();
      return;
    }
    if (this.currentPosition === this.size) {
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
      this.retry();
      this.readMoving();
    });
  }
  printResult(result) {
    IOHandler.printResult(result, this.tryCount, this.resultMap);
    Console.close();
  }
}

module.exports = BridgeGame;
