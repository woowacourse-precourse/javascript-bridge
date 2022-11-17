const { Console } = require("@woowacourse/mission-utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #indexCount;
  #gameResult;
  #tryCount;

  constructor(indexCount, gameResult, tryCount) {
    this.#indexCount = indexCount;
    this.#gameResult = gameResult;
    this.#tryCount = tryCount;
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

  indexCountUp() {
    this.#indexCount = this.#indexCount + 1;
  }

  pass(userMove) {
    if (userMove === "U") {
      this.#gameResult[0].push("O");
      this.#gameResult[1].push(` `);
    }
    if (userMove === "D") {
      this.#gameResult[0].push(` `);
      this.#gameResult[1].push("O");
    }
  }
  fail(userMove) {
    if (userMove === "U") {
      this.#gameResult[0].push("X");
      this.#gameResult[1].push(` `);
    }
    if (userMove === "D") {
      this.#gameResult[0].push(` `);
      this.#gameResult[1].push("X");
    }
  }

  reset() {
    const reset = [[], []];
    const resetIndex = 0;
    this.#gameResult = reset;
    this.#indexCount = resetIndex;
    this.#tryCount = this.#tryCount + 1;
  }

  result() {
    return this.#gameResult;
  }

  getTryCount() {
    return this.#tryCount;
  }

  move(safeBridge, userMove) {
    if (safeBridge[this.#indexCount] !== this.wordConverse(userMove)) {
      this.fail(userMove);
      return false;
    }
    if (safeBridge[this.#indexCount] === this.wordConverse(userMove)) {
      this.pass(userMove);
      this.indexCountUp();
      return true;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(retryOrExit) {
    if (retryOrExit === "R") {
      return true;
    }
    if (retryOrExit === "Q") {
      return false;
    }
  }
}

module.exports = BridgeGame;
