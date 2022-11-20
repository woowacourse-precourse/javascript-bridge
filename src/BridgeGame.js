/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #tryCount;

  #movedSpace;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#tryCount = 1;
    this.#movedSpace = [];
  }

  getBridge() {
    return [...this.#bridge];
  }

  getTryCount() {
    return this.#tryCount;
  }

  getMovedSpace() {
    return [...this.#movedSpace];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {string} movingSpace 이동할 칸 ("U" or "D")
   * @returns {boolean} 이동한 칸이 성공인지 실패인지 여부
   */
  move(movingSpace) {
    this.#movedSpace.push(movingSpace);
    return this.#judgeCurrentSpace();
  }

  #judgeCurrentSpace() {
    const currentIndex = this.#movedSpace.length - 1;
    if (this.#bridge[currentIndex] === this.#movedSpace[currentIndex])
      return true;
    return false;
  }

  isArrive() {
    const bridgeLastIndex = this.#bridge.length - 1;
    const movedSpaceLastIndex = this.#movedSpace.length - 1;
    if (bridgeLastIndex !== movedSpaceLastIndex) return false;
    if (this.#bridge[bridgeLastIndex] !== this.#movedSpace[movedSpaceLastIndex])
      return false;
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
