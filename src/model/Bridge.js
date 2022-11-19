const Constant = require("../lib/Constant");

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

  setAllBridgeEmpty() {
    (this.#upsideBridge = []), (this.#downsideBridge = []);
  }

  moveUpside(direction, index) {
    if (direction === this.#originalBridge[index]) {
      this.#upsideBridge.push(Constant.DIRECTION.POSSIBLE);
    }
    if (direction !== this.#originalBridge[index]) {
      this.#upsideBridge.push(Constant.DIRECTION.IMPOSSIBLE);
    }
    this.moveOthersideEmpty(direction);
  }

  moveDownside(direction, index) {
    if (direction === this.#originalBridge[index]) {
      this.#downsideBridge.push(Constant.DIRECTION.POSSIBLE);
    }
    if (direction !== this.#originalBridge[index]) {
      this.#downsideBridge.push(Constant.DIRECTION.IMPOSSIBLE);
    }
    this.moveOthersideEmpty(direction);
  }

  moveOthersideEmpty(direction) {
    if (direction === Constant.DIRECTION.UP) {
      this.#downsideBridge.push(Constant.DIRECTION.EMPTY);
    }
    if (direction === Constant.DIRECTION.DOWN) {
      this.#upsideBridge.push(Constant.DIRECTION.EMPTY);
    }
  }

  haveXvalue() {
    const upX = this.#upsideBridge.includes(Constant.DIRECTION.IMPOSSIBLE);
    const downX = this.#downsideBridge.includes(Constant.DIRECTION.IMPOSSIBLE);
    return upX || downX;
  }

  isGameEnd() {
    const lengthOrigin = this.#originalBridge.length;
    const lengthAnother = this.#upsideBridge.length;
    return lengthOrigin === lengthAnother;
  }
}

module.exports = Bridge;
