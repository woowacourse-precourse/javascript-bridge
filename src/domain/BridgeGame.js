/**
 * 다리 건너기 게임을 관리하는 클래스
 */
//  제공된 BridgeGame 클래스를 활용해 구현해야 한다.
//  BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
//  BridgeGame의 파일 경로는 변경할 수 있다.
//  BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
//  게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
const Bridge = require('./Bridge');
const { printResult, printMap } = require('../ui/OutputView');

class BridgeGame {
  #bridge;
  #next;
  #history;
  #tryCount;

  constructor() {
    this.#bridge = new Bridge();
    this.#next = 0;
    this.#history = [];
    this.#tryCount = 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(upOrDown) {
    this.#history.push({ position: this.#next, upOrDown, isSuccess: this.#bridge.canCross(upOrDown, this.#next) });
    this.#next += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#next = 0;
    this.#history = [];
    this.#tryCount += 1;
  }

  printMap() {
    printMap(this.#history);
  }

  printResult() {
    printResult(this.#history, this.#tryCount);
  }

  makeBridge(size) {
    this.#bridge.make(size);
  }

  isClear() {
    if (this.#bridge.isLastPosition(this.#next)) {
      return this.#history[this.#next - 1].isSuccess;
    }
    return false;
  }

  isFail() {
    return !this.#history[this.#history.length - 1].isSuccess;
  }

  isLastPosition() {
    return this.#bridge.isLastPosition(this.#next);
  }
}

module.exports = BridgeGame;
