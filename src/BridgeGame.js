/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #movingList;
  #numberOfAttempts;
  #bridgeSize;

  constructor(bridge, list, attempt) {
    this.#bridgeSize = bridge;
    this.#movingList = list;
    this.#numberOfAttempts = attempt;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const index = this.#movingList[0].length;
    direction === "U" && this.upMove(direction, this.#bridgeSize[index]);
    direction === "D" && this.downMove(direction, this.#bridgeSize[index]);
    return this.#movingList;
  }

  upMove(direction, bridge) {
    if (direction === bridge) {
      this.#movingList[0].push("O");
      this.#movingList[1].push(" ");
      return;
    }
    this.#movingList[0].push("X");
    this.#movingList[1].push(" ");
  }

  downMove(direction, bridge) {
    if (direction === bridge) {
      this.#movingList[1].push("O");
      this.#movingList[0].push(" ");
      return;
    }
    this.#movingList[1].push("X");
    this.#movingList[0].push(" ");
  }

  getScore() {
    return [this.#movingList, this.#numberOfAttempts];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#numberOfAttempts += 1;
    this.#movingList = [[], []];
  }
}

module.exports = BridgeGame;
