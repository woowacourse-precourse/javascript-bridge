const { BRIDGE_DIRECTION } = require("../constants/GameCondition.js");
class Bridge {
  #upBridge = [];
  #downBridge = [];

  currentBridgeMap(moveCmd, currentBridge) {
    if (moveCmd === BRIDGE_DIRECTION.UP) {
      this.#upBridge.push(moveCmd === currentBridge ? "O" : "X");
      this.#downBridge.push(" ");
    }
    if (moveCmd === BRIDGE_DIRECTION.DOWN) {
      this.#downBridge.push(moveCmd === currentBridge ? "O" : "X");
      this.#upBridge.push(" ");
    }
  }

  getTotalBridge() {
    return [this.#upBridge, this.#downBridge];
  }
  resetMark() {
    this.#upBridge = [];
    this.#downBridge = [];
  }
}

module.exports = Bridge;
