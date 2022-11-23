class Model {
  #userUpBridgeArr;

  #userDownBridgeArr;

  #totalTryCount;

  constructor() {
    this.#totalTryCount = 1;
    this.#userUpBridgeArr = [];
    this.#userDownBridgeArr = [];
  }

  setUpBridgeArr(answer) {
    this.#userUpBridgeArr.push(answer);
  }

  setDownBridgeArr(answer) {
    this.#userDownBridgeArr.push(answer);
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

  getCurrentMap() {
    const upArr = this.getUpBridgeArr();
    const downArr = this.getDownBridgeArr();
    const drawResult = `[${upArr.join('|')}]\n[${downArr.join('|')}]`;
    return drawResult;
  }
}

module.exports = Model;
