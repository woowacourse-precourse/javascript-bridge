class Bridge {
  #bridgeArr; // U,D 로 구성됨

  constructor(createdArr) {
    this.#bridgeArr = createdArr;
  }

  crossBridge(bridgeIndex, selectedMove) {
    const isMove = this.#bridgeArr[bridgeIndex] === selectedMove;
    return isMove;
  }

  getBridgeArray() {
    return this.#bridgeArr;
  }
  getBridgeLength() {
    return this.#bridgeArr.length;
  }
}
module.exports = Bridge;
