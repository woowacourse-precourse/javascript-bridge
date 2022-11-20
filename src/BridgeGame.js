// @ts-check

const Bridge = require('./Bridge');
const Path = require('./Path');
const StatusGenerator = require('./StatusGenerator');
const Validator = require('./utils/Validator');
const { COMMAND, COMMAND_TYPE } = require('./utils/const');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #path;
  #count;
  #isSuccess;

  /**
   * @param {string} bridgeSize
   */
  constructor(bridgeSize) {
    this.#bridge = new Bridge(bridgeSize);
    this.#path = new Path();
    this.#count = 1;
    this.#isSuccess = false;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moving U 혹은 D
   * @return {0 | 1 | 2} 0: Fail, 1: Success, 2: Next
   */
  move(moving) {
    const currentPath = this.#path.push(moving);
    const isCorrect = this.#bridge.isCorrect(currentPath);
    const isLast = this.#bridge.isLast(currentPath);

    this.#path.markOX(isCorrect);
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
      this.#path = new Path();
      this.#count += 1;
      return 0;
    }

    return 1;
  }

  getResultInfo() {
    const count = this.#count;
    const pathMap = this.getPathMap();
    const isSuccess = this.#isSuccess;

    return { count, pathMap, isSuccess };
  }

  getPathMap() {
    return this.#path.getPathMap();
  }
}

module.exports = BridgeGame;
