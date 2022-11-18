const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Bridge = require('./Bridge');
const Selection = require('./Selection');
const { PRINT_MESSAGE, MOVE } = require('./constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #selection;

  constructor() {
    this.#bridge = new Bridge();
    this.#selection = new Selection();
  }

  getBridge() {
    return this.#bridge;
  }

  getSelection() {
    return this.#selection;
  }

  start() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#selection.setComponent(direction);
    OutputView.printMap(this);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
