const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");

class BridgeGame {
  #jumpHistory;

  constructor(bridgeStatus) {
    this.bridgeStatus = bridgeStatus;
    this.#jumpHistory = [];
  }

  move(nextDirection, index) {
    this.#jumpHistory.push(nextDirection);
    OutputView.printMap(this.bridgeStatus, this.#jumpHistory);
    if (this.bridgeStatus[index] === nextDirection) {
      return true;
    }
    return false;
  }

  retry() {
    this.#jumpHistory = [];
  }

  get getJumpHistory() {
    return this.#jumpHistory;
  }
}

module.exports = BridgeGame;
