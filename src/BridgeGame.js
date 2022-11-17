const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Player = require('./Player');
const { STEP_STATUS } = require('./utils/const');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #player;
  #result;

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
   * @return {{status: 0 | 1 | 2, markingPaper: string[][] }} 0: Fail, 1: Success, 2: Next
   */
  move(moving) {
    const currentStep = this.#player.getStep();
    const isCorrect = this.#bridge[currentStep] === moving;

    const markingPaper = this.#player.markOX(moving, isCorrect);
    this.#player.setNextStep();

    if (!isCorrect) {
      return { status: STEP_STATUS.FAILURE, markingPaper };
    }

    if (currentStep === this.#bridge.length - 1) {
      return { status: STEP_STATUS.SUCCESS, markingPaper };
    }

    return { status: STEP_STATUS.NEXT, markingPaper };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} gameCommand
   * @return {1 | 2} 0: Restart, 1: Quit
   */
  retry(gameCommand) {
    if (gameCommand === 'R') {
      this.#player = new Player();
      return 2;
    }

    return 1;
  }
}

module.exports = BridgeGame;
