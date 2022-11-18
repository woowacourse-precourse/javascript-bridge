class Bridge {
  #originalBridge;
  #upsideBridge = [];
  #downsideBridge = [];

  constructor() {}

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
    if (direction === "U") {
      this.setUpSideBridge(direction, index);
    }
    if (direction === "D") {
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
      this.#upsideBridge.push(" O ");
    }
    if (direction !== this.#originalBridge[index]) {
      this.#upsideBridge.push(" X ");
    }
  }

  setDownsideBridgeValue(direction, index) {
    if (direction === this.getOriginalBridge()[index]) {
      this.#downsideBridge.push(" O ");
    }
    if (direction !== this.getOriginalBridge()[index]) {
      this.#downsideBridge.push(" X ");
    }
  }

  setUpsideBridgeEmpty() {
    this.#upsideBridge.push(" N ");
  }

  setDownsideBridgeEmpty() {
    this.#downsideBridge.push(" N ");
  }

  includesX() {
    const upLast = this.#upsideBridge.includes(" X ");
    const downLast = this.#downsideBridge.includes(" X ");
    return [upLast, downLast];
  }
}

module.exports = Bridge;
