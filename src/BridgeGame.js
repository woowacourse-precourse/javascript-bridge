/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #bridge;
  #gameResult = [];
  #countGame = 1;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  move(nth, moveLocation) {
    if (this.#bridge[nth] === moveLocation) {
      this.#gameResult.push(new Array(moveLocation, "O"));
      return this.#gameResult;
    }
    this.#gameResult.push(new Array(moveLocation, "X"));
    return this.#gameResult;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(retryOrNot) {
    if (retryOrNot === "R") {
      this.#gameResult = []; //초기화
      this.countGame();
      return true;
    }
    return false;
  }

  countGame() {
    this.#countGame += 1;
  }

  returnCountGame() {
    return this.#countGame;
  }
}

module.exports = BridgeGame;
