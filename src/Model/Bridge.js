class Bridge {
  #bridgeLength;
  constructor(bridgeLength) {
    this.setBridgeLength(bridgeLength);
    this.buildBridge();
  }
  setBridgeLength(bridgeLength) {
    this.#bridgeLength = bridgeLength;
  }

  getBridgeLength() {
    return this.#bridgeLength;
  }

  buildBridge() {}
}

module.exports = Bridge;
