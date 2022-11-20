// @ts-check

const Bridge = require('./Bridge');
const Player = require('./Player');
const StatusGenerator = require('./StatusGenerator');
const {
  MARKING,
  COMMAND,
  BRIDGE_SPACE_TYPE,
  COMMAND_TYPE,
} = require('./utils/const');
const Validator = require('./utils/Validator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #player;
  #count;
  #isSuccess;

  /**
   * @param {string} bridgeSize
   */
  constructor(bridgeSize) {
    this.#bridge = new Bridge(bridgeSize);
    this.#player = new Player();
    this.#count = 1;
    this.#isSuccess = false;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moving U 혹은 D
   * @return {0 | 1 | 2} 0: Fail, 1: Success, 2: Next
   */
  move(moving) {
    Validator.validateEqual(moving, BRIDGE_SPACE_TYPE);
    const currentLocation = this.#player.getLocation();
    const isCorrect = this.#bridge.isCorrect(moving, currentLocation);
    const isLast = this.#bridge.isLast(currentLocation);
    const mark = isCorrect ? MARKING.CORRECT : MARKING.WRONG;

    this.#player.markOX(moving, mark);
    this.#player.setLocation(currentLocation + 1);
    this.#isSuccess = isCorrect && isLast;

    return StatusGenerator.generate(isCorrect, isLast);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} gameCommand
   * @return {0 | 1}
   */
  retry(gameCommand) {
    Validator.validateEqual(gameCommand, COMMAND_TYPE);

    if (gameCommand === COMMAND.RETRY) {
      this.#player = new Player();
      this.#count += 1;
      return 0;
    }

    return 1;
  }

  getResultInfo() {
    const count = this.#count;
    const markingPaper = this.getMarkingPaper();
    const isSuccess = this.#isSuccess;

    return { count, markingPaper, isSuccess };
  }

  getMarkingPaper() {
    return this.#player.getMarkingPaper();
  }
}

module.exports = BridgeGame;
