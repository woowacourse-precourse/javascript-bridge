const { O, X } = require("./constants");
const { generateColumnMap, stopWalking } = require("./utils");

class BridgeGame {
  #bridge;
  #results;
  #runCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#results = [];
    this.#runCount = 1;
  }

  getIndex() {
    return this.#results.length;
  }

  getMatchSymbol(correctDirection, direction) {
    return correctDirection === direction ? O : X;
  }

  getMap() {
    return this.#results.reduce(
      (acc, { direction, matchSymbol }) => {
        const columnMap = generateColumnMap[direction](matchSymbol);
        return acc.map((rowMap, index) => [...rowMap, columnMap[index]]);
      },
      [[], []]
    );
  }

  getRunCount() {
    return this.#runCount;
  }

  hasMovedCorrectly() {
    const lastIndex = this.getIndex() - 1;

    if (lastIndex < 0) return true;

    const lastSymbol = this.#results[lastIndex].matchSymbol;

    return lastSymbol === O;
  }

  hasCrossedCompletely() {
    return this.#bridge.length === this.#results.length;
  }

  isClear() {
    const crossed = this.hasCrossedCompletely();
    const correct = this.hasMovedCorrectly();

    if (crossed && correct) return true;

    return false;
  }

  move(direction) {
    const index = this.getIndex();
    const correctDirection = this.#bridge[index];
    const matchSymbol = this.getMatchSymbol(correctDirection, direction);
    this.#results.push({
      direction,
      matchSymbol,
    });
  }

  endStep(app, readAgain) {
    const completed = this.hasCrossedCompletely();
    stopWalking[completed]({ app, bridgeGame: this, readAgain });
  }

  retry(app) {
    this.#results = [];
    this.#runCount++;
    app.runGame(this);
  }
}

module.exports = BridgeGame;
