const Bridge = require("../Model/Bridge");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #bridge_map = new Bridge();
  #step = 0;

  setBridge(bridge) {
    // 랜덤으로 생성된 bridge 설정하는 함수
    this.#bridge = bridge;
  }

  getBridge() {
    // 랜덤으로 생성된 bridge정보 받아오는 함수.
    return this.#bridge;
  }

  increaseStep() {
    this.#step += 1;
  }

  getCurrentMap() {
    return this.#bridge_map.getTotalBridge();
  }

  isEnd() {
    const step = this.#step;
    if (step === this.#bridge.length - 1) return true;
    if (step !== this.#bridge.length - 1) return false;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * return : 성공하면 true, 성공안하면 false
   */
  move(moveCmd) {
    const step = this.#step;
    this.#bridge_map.currentBridgeMap(moveCmd, this.#bridge[step]);
    return this.checkSuccess(moveCmd, this.#bridge[step]);
  }

  checkSuccess(moveCmd, currentBridge) {
    if (moveCmd === currentBridge) return true;
    if (moveCmd !== currentBridge) return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.resetMoveBridgeMap();
    this.resetStep();
  }

  resetMoveBridgeMap() {
    this.#bridge_map.resetMark();
  }

  resetStep() {
    this.#step = 0;
  }
}

module.exports = BridgeGame;
