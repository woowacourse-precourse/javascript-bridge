const BridgeResult = require("./BridgeResult");

class BridgeGame {

  #curIdx;
  #success;
  #bridge;
  #gameCount;
  #bridgeResult;

  constructor(bridge) {
    this.initGame();
    this.#bridge = bridge;
    this.#gameCount = 1;
    this.#bridgeResult = new BridgeResult();
  }

  initGame() {
    this.#curIdx = 0;
    this.#success = true;
  }

  gameNotFinished() {
    return this.#success && this.#curIdx < this.#bridge.length;
  }

  gameSuccess() {
    return this.#success && this.#curIdx === this.#bridge.length;
  }

  getSuccess() {
    return this.#success;
  }

  getIdx() {
    return this.#curIdx;
  }

  getCount() {
    return this.#gameCount;
  }

  getbridgeResult() {
    return this.#bridgeResult;
  }

  makeResult(dir, success) {
    this.#bridgeResult.pushResult(dir, success);
  }

  gameResult() {
    return this.#bridgeResult.getResult();
  }

  move(dir) {
    if (dir === this.#bridge[this.#curIdx]) {
      this.#curIdx += 1;
    }
    else {
      this.#curIdx += 1;
      this.#success = false;
    }
  }

  retry() {
    this.initGame();
    this.getbridgeResult().initResult();
    this.#gameCount += 1;
  }
}

module.exports = BridgeGame;
