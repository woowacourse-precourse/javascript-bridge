class Bridge {
  createdArr; // U,D 로 구성됨

  constructor(createdArr) {
    this.createdArr = createdArr;
  }

  crossBridge({ bridgeIndex, selectedMove }) {
    const isMove = this.createdArr[bridgeIndex] === selectedMove;
    return isMove;
  }
}
module.exports = Bridge;
