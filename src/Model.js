class Model {
  #userUpBridgeArr;

  #userDownBridgeArr;

  #computerBridgeArr;

  #accumulatedOX;

  #totalTryCount;

  #bridgeSize;

  constructor() {
    this.#totalTryCount = 0;
  }

  setComputerBridgeArr(arr) {
    this.#computerBridgeArr = arr;
  }

  setBridgeSize(num) {
    this.#bridgeSize = num;
  }

  getBridgeSize() {
    return this.#bridgeSize;
  }
}

module.exports = Model;
