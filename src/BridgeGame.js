/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #crossingOrder;
  #attemptCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#crossingOrder = [];
    this.#attemptCount = 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#crossingOrder.push([direction, direction === 'U' ? 0 : 1]);
  }

  getBridgeCrossingResult() {
    let bridgeCrossingResult = [[], []];

    this.#crossingOrder.forEach(([direction, directionNumber], idx) => {
      const isCross = direction === this.#bridge[idx];

      bridgeCrossingResult[directionNumber].push(isCross ? 'O' : 'X');
      bridgeCrossingResult[Math.abs(directionNumber - 1)].push(' ');
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

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#attemptCount += 1;
    this.#crossingOrder = [];
  }

  getResult() {
    let isSuccess = !this.isFail() && this.isLast();

    return { isSuccess };
  }
}

module.exports = BridgeGame;
