class Model {
  #userUpBridgeArr;

  #userDownBridgeArr;

  #computerBridgeArr;

  #accumulatedOX;

  #totalTryCount;

  constructor() {
    this.#totalTryCount = 0;
  }

  setComputerBridgeArr(arr) {
    this.#computerBridgeArr = arr;
  }
}

module.exports = Model;
