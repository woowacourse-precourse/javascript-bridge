const { O, X } = require("./constants");
const { generateColumnMap, stopWalking } = require("./utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #results;
  #runCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#results = [];
    this.#runCount = 1;
  }

  /**
   * 이번에 건널 다리가 몇 번째 순서인지 구하는 메서드
   */
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

  hasMovedCorrectly() {
    const lastIndex = this.getIndex() - 1;

    if (lastIndex < 0) return true;

    const lastSymbol = this.#results[lastIndex].matchSymbol;

    return lastSymbol === O;
  }

  hasCrossedCompletely() {
    return this.#bridge.length === this.#results.length;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
