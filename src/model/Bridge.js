const { MOVING } = require("../view/stringsUI");

class Bridge {
  createdBridge;

  bridgeMap;

  constructor(createdBridge) {
    this.createdBridge = createdBridge;
    this.bridgeMap = { upper: [], lower: [] };
  }

  crossBridge(bridgeIndex, selectedMove) {
    const isMove = this.createdBridge[bridgeIndex] === MOVING[selectedMove];
    return isMove;
  }
}
module.exports = Bridge;
