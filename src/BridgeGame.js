class BridgeGame {
  #solutionArr;
  #moveCount;

  constructor(solutionArr) {
    this.#solutionArr = solutionArr;
    this.#moveCount = 0;
  }

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
    return this.#solutionArr.length === this.#moveCount;
  }

  retry() {
    this.#moveCount = 0;
  }
}

module.exports = BridgeGame;
