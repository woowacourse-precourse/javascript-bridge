/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #gameInfo;

  constructor(GameInfo) {
    this.#gameInfo = GameInfo;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    this.#gameInfo.position += 1;
    this.#gameInfo.gameStat.push(moving);
    this.moveBridge();
  }

  moveBridge() {
    if (this.#gameInfo.bridge[this.#gameInfo.position] === this.#gameInfo.gameStat[this.#gameInfo.position]) {
      this.#gameInfo.moveBridge[this.#gameInfo.indexingArray.indexOf(this.#gameInfo.gameStat[this.#gameInfo.position])].push("O");
      this.#gameInfo.moveBridge[(this.#gameInfo.indexingArray.indexOf(this.#gameInfo.gameStat[this.#gameInfo.position]) + 1) % 2].push(" ");
    } else {
      this.#gameInfo.moveBridge[this.#gameInfo.indexingArray.indexOf(this.#gameInfo.gameStat[this.#gameInfo.position])].push("X");
      this.#gameInfo.moveBridge[(this.#gameInfo.indexingArray.indexOf(this.#gameInfo.gameStat[this.#gameInfo.position]) + 1) % 2].push(" ");
    }
  }

  getMoveBridge() {
    return this.#gameInfo.moveBridge;
  }

  getPosition() {
    return this.#gameInfo.position;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() { }
}

module.exports = BridgeGame;
