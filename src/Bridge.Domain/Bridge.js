class Bridge {
  #bridgeArr;
  constructor(bridgeRandomArray) {
    this.#bridgeArr = bridgeRandomArray;
  }

  getBridgePosition(pos) {
    return this.#bridgeArr[pos - 1];
  }

  getBridgeSliceArrFirstToPosition(pos) {
    return this.#bridgeArr.slice(0, pos);
  }

  getBridgeLength() {
    return this.#bridgeArr.length;
  }

  getBridgeArray() {
    return this.#bridgeArr;
  }
}

module.exports = Bridge;
