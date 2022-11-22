const { INPUT_KEYS, OUTPUT_KEYS } = require("../utils/constants");

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
    if (INPUT_KEYS.DOWN === this.#solutionArr[this.#moveCount]) {
      topBridge.push(OUTPUT_KEYS.BLANK);
      bottomBridge.push(OUTPUT_KEYS.FAIL);
      return { topBridge, bottomBridge };
    }
    bottomBridge.push(OUTPUT_KEYS.FAIL);
    topBridge.push(OUTPUT_KEYS.BLANK);
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
    if (INPUT_KEYS.DOWN === solutionStr) {
      topBridge.push(OUTPUT_KEYS.BLANK);
      bottomBridge.push(OUTPUT_KEYS.SUCCESS);
      return;
    }
    topBridge.push(OUTPUT_KEYS.SUCCESS);
    bottomBridge.push(OUTPUT_KEYS.BLANK);
  }

  gameFinish() {
    return this.#solutionArr.length === this.#moveCount;
  }

  retry() {
    this.#moveCount = 0;
  }
}

module.exports = BridgeGame;
