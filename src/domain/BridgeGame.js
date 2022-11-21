const BridgeGameValidator = require('./BridgeGameValidator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #moveStack = [];

  #countTry = 1;

  initalize(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
  }

  /**
   * @param {'U' | 'D'} choice 다리의 길이
   * @return {void}
   */
  move(choice) {
    BridgeGameValidator.validateMove(choice);
    this.#moveStack.push(choice);
  }

  /**
   * @return {string[]}
   */
  getMoves() {
    return [...this.#moveStack];
  }

  /**
   * @return {boolean}
   */
  isMovesPossible() {
    return this.#moveStack.map((elem, idx) => elem === this.#bridge[idx]);
  }

  /**
   * @return {boolean}
   */
  isGameWin() {
    return (
      this.#moveStack.length === this.#bridge.length &&
      this.#moveStack.every((elem, idx) => elem === this.#bridge[idx])
    );
  }

  /**
   * @return {boolean}
   */
  isGameLose() {
    return this.#moveStack.some((elem, idx) => elem !== this.#bridge[idx]);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#countTry += 1;
    this.#moveStack = [];
  }

  getTryCount() {
    return this.#countTry;
  }
}

module.exports = BridgeGame;
