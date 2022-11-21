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

  getAccumulatedOX() {
    const upResult = `[${this.#userUpBridgeArr.join('|')}]`;
    const downResult = `[${this.#userDownBridgeArr.join('|')}]`;
    return `${upResult}\n${downResult}`;
  }
}

module.exports = Model;
