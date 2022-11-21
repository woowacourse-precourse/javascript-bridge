class Model {
  #userUpBridgeArr;

  #userDownBridgeArr;

  #computerBridgeArr;

  #totalTryCount;

  #bridgeSize;

  constructor() {
    this.#totalTryCount = 1;
    this.#userUpBridgeArr = [];
    this.#userDownBridgeArr = [];
  }

  setComputerBridgeArr(arr) {
    this.#computerBridgeArr = arr;
  }

  setBridgeSize(num) {
    this.#bridgeSize = num;
  }

  setUpBridgeArr(answer) {
    this.#userUpBridgeArr.push(answer);
  }

  setDownBridgeArr(answer) {
    this.#userDownBridgeArr.push(answer);
  }

  getBridgeSize() {
    return this.#bridgeSize;
  }

  getComputerBridgeArr() {
    return this.#computerBridgeArr;
  }

  getUpBridgeArr() {
    return this.#userUpBridgeArr;
  }

  getDownBridgeArr() {
    return this.#userDownBridgeArr;
  }

  resetAndRetry() {
    this.#totalTryCount += 1;
    this.#userDownBridgeArr = [];
    this.#userUpBridgeArr = [];
  }

  getTryCount() {
    return this.#totalTryCount;
  }
}

module.exports = Model;
