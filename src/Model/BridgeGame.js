const Bridge = require("../Model/Bridge");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #bridge_map = new Bridge();
  #step = 0;

  /**
   * 랜덤으로 생성된 bridge를 set하는 메서드.
   * @param {string[]} bridge
   */
  setBridge(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 랜덤으로 생성된 bridge정보를 return하는 메서드.
   * @returns 설정된 bridge를 return
   */
  getBridge() {
    return this.#bridge;
  }

  /**
   * 현재 마킹된 map을 return하는 메서드.
   * @returns 마킹된 map 정보
   */
  getCurrentMap() {
    return this.#bridge_map.getTotalBridge();
  }

  /**
   * step을 증가시키는 메서드.
   * 여기서 step은 현재 탐색해야 할 bridge의 index를 뜻한다.
   */
  increaseStep() {
    this.#step += 1;
  }

  /**
   * 끝까지 bridge 정보를 탐색했는지 확인하는 메서드.
   * @returns 끝까지 bridge를 탐색했다면 true, 아직 탐색해야 할 bridge 정보가 남아있다면 false를 리턴.
   */
  isEnd() {
    const step = this.#step;
    if (step === this.#bridge.length - 1) return true;
    if (step !== this.#bridge.length - 1) return false;
  }

  /**
   * 사용자가 입력한 이동 커멘드와 현재 step에 해당하는 브릿지 정보를 비교하여 이동이 성공하는지에 대한 정보를 반환하는 메서드
   * @param {string} moveCmd 사용자가 입력한 이동 커멘드 -> 'U', 'D' 중 하나.
   * @param {string} currentBridge 현재 step에 해당하는 브릿지 정보 -> 'U', 'D' 중 하나.
   * @returns 사용자 커멘드와 현재 step에 해당하는 브릿지 정보가 같다면 true, 아니면 false를 리턴.
   */
  checkSuccess(moveCmd, currentBridge) {
    if (moveCmd === currentBridge) return true;
    if (moveCmd !== currentBridge) return false;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moveCmd 사용자가 입력한 이동 커멘드 -> 'U', 'D' 중 하나.
   * @returns 성공하면 true, 성공안하면 false
   */
  move(moveCmd) {
    const step = this.#step;
    this.#bridge_map.currentBridgeMap(moveCmd, this.#bridge[step]);
    return this.checkSuccess(moveCmd, this.#bridge[step]);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.resetMoveBridgeMap();
    this.resetStep();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 마킹된 map을 초기화 시키는 메서드
   */
  resetMoveBridgeMap() {
    this.#bridge_map.resetMark();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 step 정보를 초기화 시키는 메서드
   */
  resetStep() {
    this.#step = 0;
  }
}

module.exports = BridgeGame;
