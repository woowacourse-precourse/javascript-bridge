const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentIdx;
  #resultMap;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#currentIdx = 0;
    this.#resultMap;
  }

  fillMap(position) {
    const result = this.canMove(position);

    this.#resultMap[position].push(result);
    this.#resultMap[Number(!position)].push(" ");

    OutputView.printMap(this.#resultMap);

    result == "O" ? this.move() : this.stop();
  }

  canMove(position) {
    if (position === this.#bridge[this.#current]) return "O";
    return "X";
  }

  transInputtoPosition(input) {
    if (input == "U") return this.fillMap(1); // U -> 1
    if (input == "D") return this.fillMap(0); // D -> 0
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#currentIdx += 1;
    InputView.readMoving();
  }

  stop() {
    InputView.readGameCommand();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
