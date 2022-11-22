class BridgeGame {
  #bridge;
  #crossingOrder;
  #attemptCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#crossingOrder = [];
    this.#attemptCount = 1;
  }
  move(direction) {
    this.#crossingOrder.push([direction, direction === "U" ? 0 : 1]);
  }

  getBridgeCrossingResult() {
    let bridgeCrossingResult = [[], []];
    this.#crossingOrder.forEach(([direction, directionNumber], idx) =>{
      const isCross = direction === this.#bridge[idx];

      bridgeCrossingResult[directionNumber].push(isCross ? "O" : "X");
      bridgeCrossingResult[Math.abs(directionNumber - 1)].push(" ");
    });
    return bridgeCrossingResult;
  }
  isFail() {
    const idx = this.#crossingOrder.length - 1;
    return this.#bridge[idx] !== this.#crossingOrder[idx][0];
  }

  isLast() {
    return this.#bridge.length === this.#crossingOrder.length;
  }

  retry() {
    this.#attemptCount += 1;
    this.#crossingOrder = [];
  }

  getResult() {
    const isSuccess = !this.isFail() && this.isLast();
    return {isSuccess, attempCount: this.#attemptCount};
  }
}

module.exports = BridgeGame;
