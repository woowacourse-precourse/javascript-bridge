/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #index = 0;
  #result = [];
  #totalGame = 1;

  constructor(bridge) {
    this.bridge = bridge;
  }

  get result() {
    return this.#result;
  }

  get totalGame() {
    return this.#totalGame;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    const check = this.bridge.checkMove(input, this.#index);
    this.#result.push(check);
    this.#index += 1;

    if (this.isFinished() || !this.isMovable()) {
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#index = 0;
    this.#result = [];
    this.#totalGame += 1;
  }

  /**
   * 게임을 승리했는지 반환하는 메소드
   */
  isGameWin() {
    if (this.isFinished() && this.isMovable()) {
      return true;
    }
    return false;
  }

  /**
   * 모든 다리를 건넜는지 반환하는 메소드
   */
  isFinished() {
    const bridgeLength = this.bridge.bridgeLength();

    if (bridgeLength === this.#index) {
      return true;
    }

    return false;
  }

  /**
   * 마지막 입력에 이동할 수 있는 다리인지 반환하는 메소드
   */
  isMovable() {
    const lastMoving = this.#result[this.#result.length - 1];
    const isMovableBridge = lastMoving[1];

    if (isMovableBridge) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
