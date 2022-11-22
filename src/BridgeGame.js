/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #curBridge;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#curBridge = Array.from({ length: 2 }, () => []);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput, brigeIndex) {
    if (this.canMove(moveInput, brigeIndex)) {
      moveInput === 'U' ? this.moveUpSuccess() : this.moveDownSuccess();
      return this.#curBridge;
    }
    moveInput === 'U' ? this.moveUpFail() : this.moveDownFail();
    return this.#curBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#curBridge[0] = [];
    this.#curBridge[1] = [];
    return this.#curBridge;
  }

  canMove(moveInput, brigeIndex) {
    return moveInput === this.#bridge[brigeIndex];
  }

  moveUpSuccess() {
    this.#curBridge[0].push('O');
    this.#curBridge[1].push(' ');
  }

  moveDownSuccess() {
    this.#curBridge[0].push(' ');
    this.#curBridge[1].push('O');
  }

  moveUpFail() {
    this.#curBridge[0].push('X');
    this.#curBridge[1].push(' ');
  }

  moveDownFail() {
    this.#curBridge[0].push(' ');
    this.#curBridge[1].push('X');
  }
}

module.exports = BridgeGame;
