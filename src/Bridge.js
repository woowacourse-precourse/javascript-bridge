class Bridge {
  #upBridge = [];
  #downBridge = [];

  pushUpBridge(word) {
    this.#upBridge.push(word);
  }

  pushDownBridge(word) {
    this.#downBridge.push(word);
  }

  getUpBridge() {
    return this.#upBridge;
  }

  getDownBridge() {
    return this.#downBridge;
  }
}

module.exports = Bridge;
