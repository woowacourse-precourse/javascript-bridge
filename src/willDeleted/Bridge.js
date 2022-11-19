const Constant = require("../lib/Constant");

class Bridge {
  #woowaBridge;
  #originalBridge;
  #upsideBridge = [];
  #downsideBridge = [];

  constructor(woowaBridge) {
    this.#woowaBridge = woowaBridge;
  }

  getOriginalBridge() {
    return this.#originalBridge;
  }

  setOriginalBridge(bridge) {
    this.#originalBridge = bridge;
  }

  getUpsideBridge() {
    return this.#upsideBridge;
  }

  getDownsideBridge() {
    return this.#downsideBridge;
  }

  getLength() {
    const lengthOrigin = this.#originalBridge.length;
    const lengthAnother = this.#upsideBridge.length;
    return lengthOrigin === lengthAnother;
  }

  setResult(direction, index) {
    if (direction === Constant.DIRECTION.UP) {
      this.setUpSideBridge(direction, index);
    }
    if (direction === Constant.DIRECTION.DOWN) {
      this.setDownSideBridge(direction, index);
    }
  }

  getResult() {
    return [this.getUpsideBridge(), this.getDownsideBridge()];
  }

  setUpSideBridge(direction, index) {
    this.setUpsideBridgeValue(direction, index);
    this.setDownsideBridgeEmpty();
  }

  setDownSideBridge(direction, index) {
    this.setDownsideBridgeValue(direction, index);
    this.setUpsideBridgeEmpty();
  }

  setUpsideBridgeValue(direction, index) {
    if (direction === this.#originalBridge[index]) {
      this.#upsideBridge.push(Constant.DIRECTION.POSSIBLE);
    }
    if (direction !== this.#originalBridge[index]) {
      this.#upsideBridge.push(Constant.DIRECTION.IMPOSSIBLE);
    }
  }

  setDownsideBridgeValue(direction, index) {
    if (direction === this.getOriginalBridge()[index]) {
      this.#downsideBridge.push(Constant.DIRECTION.POSSIBLE);
    }
    if (direction !== this.getOriginalBridge()[index]) {
      this.#downsideBridge.push(Constant.DIRECTION.IMPOSSIBLE);
    }
  }

  setUpsideBridgeEmpty() {
    this.#upsideBridge.push(Constant.DIRECTION.EMPTY);
  }

  setDownsideBridgeEmpty() {
    this.#downsideBridge.push(Constant.DIRECTION.EMPTY);
  }

  includesX() {
    const upX = this.#upsideBridge.includes(Constant.DIRECTION.IMPOSSIBLE);
    const downX = this.#downsideBridge.includes(Constant.DIRECTION.IMPOSSIBLE);
    return upX || downX;
  }

  setInitialValue(setter) {
    this.#upsideBridge = [];
    this.#downsideBridge = [];
    setter();
    this.#woowaBridge.upOrDown();
  }
}

module.exports = Bridge;
