class Model {
  #userUpBridgeArr;

  #userDownBridgeArr;

  #computerBridgeArr;

  #totalTryCount;

  #bridgeSize;

  constructor() {
    this.#totalTryCount = 0;
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
}

module.exports = Model;
