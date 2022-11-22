class BridgeStep {
  #bridgeKeys;

  constructor(bridgeKeys) {
    this.#bridgeKeys = bridgeKeys;
  }

  checkPass(position, direction) {
    return this.#bridgeKeys[position] === direction;
  }

  checkAllPass(clearCount) {
    return this.#bridgeKeys.length === clearCount;
  }

  getBridgeSize() {
    return this.#bridgeKeys.length;
  }
}

module.exports = BridgeStep;
