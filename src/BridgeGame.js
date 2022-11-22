const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  size;

  #bridges;

  #state;

  #tryCount;

  constructor() {
    this.#bridges = [];
    this.#state = [];
    this.#tryCount = 1;
    InputView.readBridgeSize(this);
  }

  makeBridge() {
    this.#bridges = BridgeMaker.makeBridge(
      this.size,
      BridgeRandomNumberGenerator.generate
    );
    InputView.readMoving(this);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(position) {
    this.#state.push(position);
    let isPossible = false;
    if (this.#bridges[this.#state.length - 1] === position) isPossible = true;
    OutputView.printMap(this.#state, isPossible);
    if (isPossible) {
      if (this.#state.length === this.#bridges.length) this.quit(isPossible);
      if (this.#state.length !== this.#bridges.length)
        InputView.readMoving(this);
    }
    if (!isPossible) InputView.readGameCommand(this);
  }

  quit(isSuccess) {
    OutputView.printResult(this.#state, isSuccess, this.#tryCount);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#state = [];
    this.#tryCount += 1;
    InputView.readMoving(this);
  }
}

module.exports = BridgeGame;
