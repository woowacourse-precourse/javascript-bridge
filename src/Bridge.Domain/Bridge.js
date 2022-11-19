class Bridge {
  #bridgeArr;
  constructor(bridgeRandomArray) {
    this.#bridgeArr = bridgeRandomArray;
  }

  getBridgePosition(pos) {
    return this.#bridgeArr[pos];
  }

  getBridgeArray() {
    return this.#bridgeArr;
  }
}

exports.module = Bridge;
