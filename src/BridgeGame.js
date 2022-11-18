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
    this.#resultMap = [[], []]; // 0 ≒ D , 1 ≒ U
  }

  transInputtoPosition(input) {
    if (input == "U") return this.canMove(1); // U -> 1
    if (input == "D") return this.canMove(0); // D -> 0
  }

  canMove(position) {
    if (position === Number(this.#bridge[this.#currentIdx]))
      return this.fillResultMap(position, "O");
    return this.fillResultMap(position, "X");
  }

  fillResultMap(position, str) {
    this.#resultMap[position].push(str);
    this.#resultMap[Number(!position)].push(" ");

    OutputView.printMap(this.#resultMap);

    str == "O" ? this.move() : this.stop();
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
