const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const returnProcessedInput = require('./Utils/returnProcessedInput');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #Status = {
    bridge: null,
    Input: [],
    output: null,
    isPassed: null,
    isCleared: null,
    try: 1,
  };

  initializeBridge(size) {
    this.#Status.bridge = makeBridge(size, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput) {
    this.#Status.Input.push(moveInput);
  }

  setMoveOutput(isPassed, isCleared) {
    this.#Status.isPassed = isPassed;
    this.#Status.isCleared = isCleared;
    this.#Status.output = returnProcessedInput.getProcessedInput(this.#Status.Input, isPassed);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#Status.Input = [];
    this.#Status.output = null;
    this.#Status.isPassed = null;
    this.#Status.isCleared = null;
    this.#Status.try += 1;
  }

  getStatus() {
    return this.#Status;
  }
}

module.exports = BridgeGame;
