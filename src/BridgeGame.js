/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #step;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#step = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#step += 1;
  }

  checkCorrectSelect(select) {
    return select === this.#bridge[this.#step];
  }

  checkIsComplete() {
    return this.#step === this.#bridge.length;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#step = 0;
  }

  makeSuccessBridgeLine(select) {
    return this.#bridge
      .slice(0, this.#step)
      .map((bridgeStep) => (bridgeStep === select ? "O" : " "));
  }

  getSuccessBridge() {
    const bridge_U = this.makeSuccessBridgeLine("U");
    const bridge_D = this.makeSuccessBridgeLine("D");
    return { bridge_U, bridge_D };
  }

  getFailureBridge({ bridge_U, bridge_D }) {
    if (this.#bridge[this.#step] === "U") {
      bridge_U.push(" ");
      bridge_D.push("X");
    } else if (this.#bridge[this.#step] === "D") {
      bridge_U.push("X");
      bridge_D.push(" ");
    }
    return { bridge_U, bridge_D };
  }
}

module.exports = BridgeGame;
