const { WORD } = require("./Constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridges;
  #movements;
  #numberOfTry;

  constructor(bridges) {
    this.#bridges = bridges;
    this.#movements = [];
    this.#numberOfTry = 1;
  }

  getBridges() {
    return this.#bridges;
  }

  getMovements() {
    return this.#movements;
  }

  getNumberOfTry() {
    return this.#numberOfTry;
  }

  isEnd() {
    if (this.#bridges.length === this.#movements.length) {
      return true;
    }
    return false;
  }

  isSuccess() {
    if (this.#movements[this.#movements.length - 1] === WORD.SUCCESS)
      return true;
    return false;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    if (this.#bridges[this.#movements.length] === moving) {
      this.#movements.push(WORD.SUCCESS);
      console.log("movements", this.#movements);
      return true;
    }
    this.#movements.push(WORD.FAILURE);
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#movements = [];
    this.#numberOfTry += 1;
  }
}

module.exports = BridgeGame;
