/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentIdx;
  #bridgeMap;
  #retryCount;
  #gameState;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#currentIdx = 0;
    this.#bridgeMap = [[], []]; // 0 ≒ D , 1 ≒ U
    this.#retryCount = 1;
    this.#gameState = "";
  }

  transInputtoPosition(input) {
    if (input == "U") return this.canMove(1); // U -> 1
    if (input == "D") return this.canMove(0); // D -> 0
  }

  canMove(position) {
    if (position === Number(this.#bridge[this.#currentIdx]))
      return this.fillMap(position, "O");
    return this.fillMap(position, "X");
  }

  fillMap(position, str) {
    this.#bridgeMap[position].push(str);
    this.#bridgeMap[Number(!position)].push(" ");

    str == "O" ? this.move() : this.stop();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    if (this.#currentIdx === this.#bridge.length)
      return (this.#gameState = "성공");
    else {
      this.#currentIdx += 1;
      return (this.#gameState = "O");
    }
  }

  stop() {
    return (this.#gameState = "X");
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }

  getRetryCount() {
    return this.#retryCount;
  }

  getGameState() {
    return this.#gameState;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#retryCount += 1;
  }
}

module.exports = BridgeGame;
