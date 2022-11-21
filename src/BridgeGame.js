const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryCount = 1;
  #moveCount = 0;
  #bridge = [];
  #user = [];
  #status = "";

  getTryCount() {
    return this.#tryCount
  }
  getMoveCount() {
    return this.#moveCount
  }

  getBride() {
    return this.#bridge
  }
  setBridge(input) {
    this.#bridge = BridgeMaker.makeBridge(
      Number(input), 
      BridgeRandomNumberGenerator.generate
    );
  }

  getUser() {
    return this.#user;
  }

  getStatus() {
    return this.#status;
  }
  setStaus() {
    const isCorrect = this.#bridge[this.#moveCount - 1] === this.#user[this.#moveCount - 1];
    const isEnd = this.#moveCount === this.#bridge.length

    if (isEnd && isCorrect) {
      this.#status = "END"
    } else if (!isEnd && isCorrect) {
      this.#status = "NEXT"
    } else if (!isCorrect) {
      this.#status = "FAIL"
    }
    return this;
  }

  getMatchResult() {
    return this.#user[this.#moveCount - 1] === this.#bridge[this.#moveCount - 1] ? "O" : "X"
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    this.#moveCount += 1
    this.#user.push(input)

    return this;
  }
  
  

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#moveCount = 0
    this.#user = [];
  }
}

module.exports = BridgeGame;
