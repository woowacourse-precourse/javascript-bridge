const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Player = require('./Player');
const { STEP_STATUS, MOVING, MARKING } = require('./utils/const');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #player;

  /**
   * @param {number} bridgeSize
   */
  constructor(bridgeSize) {
    const generate = BridgeRandomNumberGenerator.generate;
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    this.#player = new Player();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moving U 혹은 D
   * @return {0 | 1 | 2} 0: Fail, 1: Success, 2: Next
   */
  move(moving) {
    const currentStep = this.#player.getStep();
    const isCorrect = this.#bridge[currentStep] === moving;

    this.#player.markOX(moving, isCorrect);

    if (!isCorrect) return STEP_STATUS.FAILURE;
    if (currentStep === this.#bridge.length - 1) return STEP_STATUS.SUCCESS;

    return STEP_STATUS.NEXT;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    console.log('retry');
  }
}

module.exports = BridgeGame;
