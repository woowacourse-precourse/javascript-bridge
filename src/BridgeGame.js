/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #curBridge_U;
  #curBridge_D;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#curBridge_U = [];
    this.#curBridge_D = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput, brigeIndex) {
    return this.makeCurBridge(moveInput, brigeIndex);
  }

  /**
   * 현재까지 건넌 다리를 만드는 메서드
   */
  makeCurBridge(moveInput, brigeIndex) {
    if (moveInput === this.#bridge[brigeIndex]) {
      if (moveInput === 'U') {
        this.#curBridge_U.push('O');
        this.#curBridge_D.push(' ');
      }
      if (moveInput === 'D') {
        this.#curBridge_U.push(' ');
        this.#curBridge_D.push('O');
      }
    }
    if (moveInput !== this.#bridge[brigeIndex]) {
      if (moveInput === 'U') {
        this.#curBridge_U.push('X');
        this.#curBridge_D.push(' ');
      }
      if (moveInput === 'D') {
        this.#curBridge_U.push(' ');
        this.#curBridge_D.push('X');
      }
    }
    return [this.#curBridge_U, this.#curBridge_D];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
