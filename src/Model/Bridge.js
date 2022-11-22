const { BRIDGE_DIRECTION, MARKING } = require("../constants/GameCondition.js");
class Bridge {
  #upBridge = [];
  #downBridge = [];

  currentBridgeMap(moveCmd, currentBridge) {
    if (moveCmd === BRIDGE_DIRECTION.UP) {
      this.#upBridge.push(moveCmd === currentBridge ? MARKING.O : MARKING.X);
      this.#downBridge.push(MARKING.BLANK);
    }
    if (moveCmd === BRIDGE_DIRECTION.DOWN) {
      this.#downBridge.push(moveCmd === currentBridge ? MARKING.O : MARKING.X);
      this.#upBridge.push(MARKING.BLANK);
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
