const Bridge = require('./Bridge');
const Result = require('./Result');
const { CONSTANTS } = require('../constants/Message');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #solutionBridge;
  #index;
  #result;
  #tryCount;

  constructor(size) {
    this.#solutionBridge = new Bridge(size);
    this.#index = CONSTANTS.START_INDEX;
    this.#tryCount = CONSTANTS.TRY_COUNT;
  }

  get index() {
    return this.#index;
  }

  get tryCount() {
    return this.#tryCount;
  }

  get result() {
    return this.#result;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(direction) {
    const isMove = this.#solutionBridge.checkMove(this.#index, direction);
    this.#result = new Result(this.#solutionBridge, this.#index, isMove);
    this.#result.print();
    this.#index += 1;
    return isMove;
  }

  isEnd() {
    return this.#solutionBridge.checkLength(this.#index);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry() {
    this.#index = CONSTANTS.START_INDEX;
    this.#tryCount += CONSTANTS.TRY_COUNT;
  }

  finalPrint() {
    this.#result.printFinalResult(this.#tryCount);
  }
}

module.exports = BridgeGame;
