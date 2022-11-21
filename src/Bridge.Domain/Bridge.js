class Bridge {
  #bridgeArr;
  constructor(bridgeRandomArray) {
    this.#bridgeArr = bridgeRandomArray;
  }

  getBridgePosition(pos) {
    return this.#bridgeArr[pos];
  }

  getBridgeSliceArrFirstToPosition(pos) {
    return this.#bridgeArr.slice(0, pos + 1);
  }

  getBridgeArrayLength() {
    return this.#bridgeArr.length;
  }

  getBridgeArray() {
    return this.#bridgeArr;
  }
}

module.exports = Bridge;
