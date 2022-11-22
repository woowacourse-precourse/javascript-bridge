const Bridge = require('./Bridge');
const ResultMaker = require('./ResultMaker');
const BridgeValidation = require('./Validation/BridgeValidation');
const ControlValidation = require('./Validation/ControlValidation');
const MoveValidation = require('./Validation/MoveValidation');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #index;
  #result;
  #tryCount;
  #status;
  constructor(length) {
    BridgeValidation(length);
    this.#bridge = new Bridge(length);
    this.#index = 0;
    this.#tryCount = 1;
  }
  get result() {
    return this.#result;
  }
  get tryCount() {
    return this.#tryCount;
  }
  get status() {
    return this.#status;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    MoveValidation(input);
    this.#status = this.#bridge.movable(this.#index, input);
    this.#result = ResultMaker(this.#bridge, this.#index, this.#status);
    this.#index += 1;
  }

  isNotEnd() {
    return this.#bridge.checkLength(this.#index);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry(input) {
    ControlValidation(input);
    this.#index = 0;
    this.#tryCount += 1;
  }
}

module.exports = BridgeGame;
