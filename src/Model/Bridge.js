const { BRIDGE_DIRECTION } = require("../constants/GameCondition.js");
class Bridge {
  upBridge = [];
  downBridge = [];

  currentBridgeMap(cmd, currentBridge) {
    if (cmd === BRIDGE_DIRECTION.UP) {
      this.upBridge.push(currentBridge === cmd ? "O" : "X");
      this.downBridge.push(" ");
    }
    if (cmd === BRIDGE_DIRECTION.DOWN) {
      this.downBridge.push(currentBridge === cmd ? "O" : "X");
      this.upBridge.push(" ");
    }
  }

  getTotalBridge() {
    return [this.upBridge, this.downBridge];
  }
  resetMark() {
    this.upBridge = [];
    this.downBridge = [];
  }
}

module.exports = Bridge;
