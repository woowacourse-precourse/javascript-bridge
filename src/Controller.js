const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class Controller {
  constructor() {
    this.BridgeGame = new BridgeGame();
  }

  giveSize(size) {
    this.BridgeGame.receiveSize(size);
  }

  giveMoving(nowStep, moving) {
    const [bridge, isSafe, isEnd] = this.BridgeGame.move(nowStep, moving);
    OutputView.printMap(bridge, nowStep, isSafe);
    if (isEnd) orderEnd();
    return isSafe;
  }

  giveAnswer(answer) {
    this.BridgeGame.retry(answer);
  }

  orderEnd() {
    OutputView.printResult();
  }
}

module.exports = Controller;
