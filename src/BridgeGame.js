// @ts-check

const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Player = require('./Player');
const StatusGenerator = require('./StatusGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #player;
  #count;

  /**
   * @param {number} bridgeSize
   */
  constructor(bridgeSize) {
    const generate = BridgeRandomNumberGenerator.generate;
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    this.#player = new Player();
    this.#count = 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moving U 혹은 D
   * @return {0 | 1 | 2} 0: Fail, 1: Success, 2: Next
   */
  move(moving) {
    const currentStep = this.#player.getStep();

    const isCorrect = this.#bridge[currentStep] === moving;
    const isLast = currentStep === this.#bridge.length - 1;

    this.#player.markOX(moving, isCorrect);
    this.#player.setStep(currentStep + 1);

    return StatusGenerator.generate(isCorrect, isLast);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} gameCommand
   * @return {1 | 2} 1: Quit, 2: Restart
   */
  retry(gameCommand) {
    if (gameCommand === 'R') {
      this.#player = new Player();
      this.#count += 1;

      return 2;
    }

    return 1;
  }

  /**
   * @returns {number}
   */
  getCount() {
    return this.#count;
  }

  /**
   * @returns  {string[][]}
   */
  getMarkingPaper() {
    return this.#player.getMarkingPaper();
  }
}

module.exports = BridgeGame;
