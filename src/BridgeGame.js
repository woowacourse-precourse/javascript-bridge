const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #status = [];
  #result = [[], []];
  #count;

  constructor(bridge) {
    this.#bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#status.push([direction, direction === "U" ? 0 : 1]);
  }

  moveResult() {
    this.#status.map(([direction, isBottom], index) => {
      const compareBridge = direction === this.#bridge[index];

      this.#result[isBottom].push(compareBridge ? "O" : "X");
      this.#result[Math.abs(isBottom - 1)].push(" ");
    });

    return this.#result;
  }

  isFail() {
    const index = this.#status.length - 1;

    return this.#bridge[index] !== this.#status[index][0];
  }

  isEnd() {
    return this.#bridge.length === this.#status.length;
  }

  quit() {
    let isSuccess = !this.isFail() && this.isEnd();

    Console.print("최종 게임 결과\n");
    OutputView.printMap(this.moveResult());
    OutputView.printResult({ isSuccess, count: this.#count });
    Console.close();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#count += 1;
    this.#status = [];
  }
}

module.exports = BridgeGame;
