const BridgeMapMaker = require("./BridgeMapMaker");
const OutputView = require("../views/OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static NOT_PASS = "X";
  static PASS = "O";

  #bridge;
  #numberOfAttemps = 0;
  #distance = 0;
  #isGameEnded = false;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  constructor(bridge) {
    this.#bridge = bridge;
    this.#numberOfAttemps++;
  }

  getIsGameEnded() {
    return this.#isGameEnded;
  }

  move(direction) {
    if (this.#distance === this.#bridge.length - 1) {
      this.#isGameEnded = true;
    }
    const block = this.#bridge[this.#distance++];
    const isPlaceToPass = this.isPlaceToPass(block, direction);
    const map = BridgeMapMaker.makeMap(
      direction,
      isPlaceToPass,
      this.#distance
    );
    OutputView.printMap(map);
  }

  isPlaceToPass(block, direction) {
    return direction === block ? BridgeGame.PASS : BridgeGame.NOT_PASS;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
