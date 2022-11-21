/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #solutionArr;
  #moveCount;

  constructor(solutionArr) {
    this.#solutionArr = solutionArr;
    this.#moveCount = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#moveCount += 1;
    return this.bridgeResult();
  }

  checkFail(moveKey) {
    if (moveKey !== this.#solutionArr[this.#moveCount]) {
      const { topBridge, bottomBridge } = this.bridgeResult();
      this.insertFailValue({ topBridge, bottomBridge });
      return { topBridge, bottomBridge };
    }
    return false;
  }

  insertFailValue({ topBridge, bottomBridge }) {
    if ("D" === this.#solutionArr[this.#moveCount]) {
      topBridge.push(" ");
      bottomBridge.push("X");
      return { topBridge, bottomBridge };
    }
    bottomBridge.push("X");
    topBridge.push(" ");
  }

  bridgeResult() {
    const topBridge = [];
    const bottomBridge = [];

    this.#solutionArr.slice(0, this.#moveCount).forEach((solutionStr) => {
      this.insertSuccessValue(solutionStr, topBridge, bottomBridge);
    });
    return { topBridge, bottomBridge };
  }

  insertSuccessValue(solutionStr, topBridge, bottomBridge) {
    if ("D" === solutionStr) {
      topBridge.push(" ");
      bottomBridge.push("O");
      return;
    }
    topBridge.push("O");
    bottomBridge.push(" ");
  }

  gameFinish() {
    if (this.#solutionArr.length === this.#moveCount) {
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
