const CONSTANT = require("../lib/Constant");

class Bridge {
  #bridgeGame;
  #originalBridge;
  #upsideBridge = [];
  #downsideBridge = [];

  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  getCurrentBridge() {
    return this.#upsideBridge;
  }

  getBridges() {
    return [this.#upsideBridge, this.#downsideBridge];
  }

  setOriginalBridge(bridge) {
    this.#originalBridge = bridge;
  }

  getOriginalBridge() {
    return this.#originalBridge;
  }

  setAllBridgeEmpty() {
    (this.#upsideBridge = []), (this.#downsideBridge = []);
  }

  moveUpside(direction, index) {
    if (direction === this.moveOkPosition(index)) {
      this.#upsideBridge.push(CONSTANT.DIRECTION.POSSIBLE);
    }
    if (direction !== this.moveOkPosition(index)) {
      this.#upsideBridge.push(CONSTANT.DIRECTION.IMPOSSIBLE);
    }
    this.moveOthersideEmpty(direction);
  }

  moveDownside(direction, index) {
    if (direction === this.moveOkPosition(index)) {
      this.#downsideBridge.push(CONSTANT.DIRECTION.POSSIBLE);
    }
    if (direction !== this.moveOkPosition(index)) {
      this.#downsideBridge.push(CONSTANT.DIRECTION.IMPOSSIBLE);
    }
    this.moveOthersideEmpty(direction);
  }

  moveOthersideEmpty(direction) {
    if (direction === CONSTANT.DIRECTION.UP) {
      this.#downsideBridge.push(CONSTANT.DIRECTION.EMPTY);
    }
    if (direction === CONSTANT.DIRECTION.DOWN) {
      this.#upsideBridge.push(CONSTANT.DIRECTION.EMPTY);
    }
  }

  haveXValue() {
    const upX = this.#upsideBridge.includes(CONSTANT.DIRECTION.IMPOSSIBLE);
    const downX = this.#downsideBridge.includes(CONSTANT.DIRECTION.IMPOSSIBLE);
    return upX || downX;
  }

  isGameEnd() {
    const lengthOrigin = this.#originalBridge.length;
    const lengthAnother = this.#upsideBridge.length;
    return lengthOrigin === lengthAnother;
  }

  moveOkPosition(index) {
    return this.#originalBridge[index];
  }
}

module.exports = Bridge;
