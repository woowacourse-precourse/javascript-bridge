const { Console } = require("@woowacourse/mission-utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryCount;
  #gameResult;
  constructor(tryCount, gameResult) {
    this.#tryCount = tryCount;
    this.#gameResult = gameResult;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  //여기서 반복문
  wordConverse(word) {
    if (word === "U") {
      return 1;
    }
    if (word === "D") {
      return 0;
    }
  }

  tryCountUp() {
    this.#tryCount = this.#tryCount + 1;
  }

  pass() {
    this.#gameResult = this.#gameResult + "O";
  }
  fail() {
    this.#gameResult = this.#gameResult + "X";
  }

  result() {
    return this.#gameResult;
  }

  move(safeBridge, userMove) {
    if (safeBridge[this.#tryCount] !== this.wordConverse(userMove)) {
      this.fail();
      return false;
    }
    if (safeBridge[this.#tryCount] === this.wordConverse(userMove)) {
      this.pass();
      this.tryCountUp();
      return true;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
