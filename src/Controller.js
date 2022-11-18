const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class Controller {
  #nowMap;

  constructor() {
    this.BridgeGame = new BridgeGame();
    this.#nowMap = [];
  }

  giveSize(size) {
    this.BridgeGame.receiveSize(size);
  }

  giveMoving(nowStep, moving) {
    const [bridge, isSafe, isEnd] = this.BridgeGame.move(nowStep, moving);
    this.#nowMap = OutputView.printMap(bridge, nowStep, isSafe);
    if (isEnd) {
      const retryCnt = this.BridgeGame.letEnd();
      this.orderEnd(this.#nowMap, retryCnt, true);
    }
    return isSafe;
  }

  giveAnswer(answer) {
    const [order, retryCnt] = this.BridgeGame.retry(answer);
    if (order) return true;
    else this.orderEnd(retryCnt, false);
  }

  orderEnd(retryCnt, isSuccess) {
    OutputView.printResult(this.#nowMap, retryCnt, isSuccess);
  }
}

module.exports = Controller;
