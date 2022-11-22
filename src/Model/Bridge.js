const { BRIDGE_DIRECTION, MARKING } = require("../constants/GameCondition.js");
class Bridge {
  #upBridge = [];
  #downBridge = [];

  /**
   * 사용자가 입력한 이동 커멘드와 현재 step에 해당하는 브릿지 정보를 비교하여 맵에 마킹하는 기능.
   * @param {string} moveCmd  사용자가 입력한 'U', 'D' 중 하나
   * @param {string} currentBridge 현재 step에 해당하는 'U', 'D' 중 하나
   */
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

  /**
   *
   * @returns 위에 해당하는 마킹된 맵과 아래에 해당하는 마킹된 맵을 리턴한다.
   */
  getTotalBridge() {
    return [this.#upBridge, this.#downBridge];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 Marking된 Map을 초기화하는데 사용된다.
   */
  resetMark() {
    this.#upBridge = [];
    this.#downBridge = [];
  }
}

module.exports = Bridge;
