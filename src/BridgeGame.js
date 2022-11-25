const { GAME_CONSTANTS } = require('./utils/constants');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #pattern;
  #history;
  #distance;
  #tryCount;

  constructor() {
    this.#initHistory();
    this.#tryCount = 1;
  }

  setPattern(pattern) {
    this.#pattern = pattern;
  }

  static makePattern(size) {
    return BridgeMaker.makeBridge(Number(size), generate);
  }

  #initHistory() {
    this.#distance = 0;
    this.#history = new Map([
      [GAME_CONSTANTS.upStair, []],
      [GAME_CONSTANTS.downStair, []],
    ]);
  }

  isEndGame() {
    return this.#pattern.length === this.#distance;
  }

  incrementDistance() {
    this.#distance += 1;
  }

  #incrementTryCount() {
    this.#tryCount += 1;
  }

  getHistory() {
    return this.#history;
  }

  checkPath(chooseStep) {
    return this.#pattern[this.#distance] === chooseStep;
  }

  #getPathMarker(chooseStep) {
    return this.checkPath(chooseStep) ? GAME_CONSTANTS.goPath : GAME_CONSTANTS.notPath;
  }

  getTryCount() {
    return this.#tryCount;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(chooseStep) {
    [GAME_CONSTANTS.upStair, GAME_CONSTANTS.downStair].forEach((stair) => {
      this.#history
        .get(stair)
        .push(chooseStep === stair ? this.#getPathMarker(chooseStep) : GAME_CONSTANTS.empty);
    });
    return this;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#initHistory();
    this.#incrementTryCount();
  }
}

module.exports = BridgeGame;
