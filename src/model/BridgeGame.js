const Bridge = require("../model/Bridge.js");
const { BRIDGE_DIRECTION } = require("../util/Constants.js");
class BridgeGame {
  #bridge = [];
  #bridge_map = new Bridge();
  #step = 0;
  setBridge(bridge) {
    this.#bridge = bridge;
  }
  getBridge() {
    return this.#bridge;
  }

  addStep() {
    this.#step += 1;
  }

  currentMap() {
    return this.#bridge_map.getAllBridge();
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(step) {
    const step = this.#step;
    const current = this.#bridge[step];
    if (current === BRIDGE_DIRECTION.DOWN) {
      this.#bridge_map.upBridge.push(current === step ? "O" : "X");
      this.#bridge_map.downBridge.push(" ");
    }
    if (current === BRIDGE_DIRECTION.UP) {
      this.#bridge_map.downBridge.push(current === step ? "O" : "X");
      this.#bridge_map.upBridge.push(" ");
    }
    this.addStep();
    return this.checkSuccess(step, current);
  }

  checkSuccess(step, current) {
    if (step === current) return true;
    if (step !== current) return false;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}
module.exports = BridgeGame;
