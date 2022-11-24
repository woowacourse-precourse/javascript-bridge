class Bridge {
  #bridgeArr; // U,D 로 구성됨

  constructor(createdArr) {
    this.#bridgeArr = createdArr;
  }

  crossBridge(currIndex, selectedMove) {
    const isMove = this.#bridgeArr[currIndex] === selectedMove;
    return isMove;
  }

  getBridgeLength() {
    return this.#bridgeArr.length;
  }
}
module.exports = Bridge;
