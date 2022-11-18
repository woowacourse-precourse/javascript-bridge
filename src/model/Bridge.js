class Bridge {
  #originalBridge;
  #upsideBridge = [];
  #downsideBridge =[];

  constructor() {}

  getOriginalBridge() {
    return this.#originalBridge;
  }

  setOriginalBridge(bridge) {
    this.#originalBridge = bridge;
  }

  getUpsideBridge() {
    return this.#upsideBridge
  }

  getDownsideBridge() {
    return this.#downsideBridge
  }

  getResult (direction,index) {
    if (direction === "U") {
      this.setUpSideBridge(direction,index)
    }
    if (direction === "D") {
      this.setDownSideBridge(direction,index)
    }
    return [this.getUpsideBridge() , this.getDownsideBridge()]
  }

  setUpSideBridge(direction,index) {
    this.setUpsideBridgeValue(direction,index);
    this.setDownsideBridgeEmpty();
  }

  setDownSideBridge(direction,index) {
    this.setDownsideBridgeValue(direction,index);
    this.setUpsideBridgeEmpty();
  }

  setUpsideBridgeValue (direction,index) {
    if(direction === this.getOriginalBridge()[index]) {
      this.#upsideBridge.push("O");
    }
    if(direction !== this.getOriginalBridge()[index]) {
      this.#upsideBridge.push("X");
    }
  }

  setDownsideBridgeValue(direction,index) {
    if(direction === this.getOriginalBridge()[index]) {
      this.#downsideBridge.push("O");
    }
    if(direction !== this.getOriginalBridge()[index]) {
      this.#downsideBridge.push("X");
    }
  }

  setUpsideBridgeEmpty() {
    this.#upsideBridge.push(" ");
  }

  setDownsideBridgeEmpty() {
    this.#downsideBridge.push(" ")
  }
}

module.exports = Bridge;
