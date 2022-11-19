const { MOVING } = require("../view/stringsUI");

class Bridge {
  createdArr;

  constructor(createdArr) {
    this.createdArr = createdArr;
  }

  crossBridge({ bridgeIndex, selectedMove }) {
    const isMove = this.createdArr[bridgeIndex] === MOVING[selectedMove];
    return isMove;
  }
}
module.exports = Bridge;
