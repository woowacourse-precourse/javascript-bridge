const { BRIDGE_RULE, GAME_RULE } = require('../constants');
const Bridge = require('./Bridge');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMap = require('./BridgeMap');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #map = new BridgeMap();

  #location = 0;

  setBridge(size) {
    BridgeGame.#validateSize(size);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = new Bridge(bridge);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    BridgeGame.#validateMoving(input);
    const isCrossed = this.#bridge.isCrossed(input, this.#location);

    this.#map.add(input, isCrossed);
    this.#location += 1;

    return isCrossed;
  }

  getMap() {
    return this.#map;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#map.reset();
    this.#location = 0;
  }

  isWin() {
    return this.#bridge.size() === this.#location;
  }

  static #isSizeInRange(size) {
    return size >= BRIDGE_RULE.LENGTH_MIN && size <= BRIDGE_RULE.LENGTH_MAX;
  }

  static #validateSize(size) {
    if (!BridgeGame.#isSizeInRange(size)) {
      throw new Error('[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.');
    }
  }

  static #isMovingKeyword(input) {
    return input === GAME_RULE.UPSIDE || input === GAME_RULE.DOWNSIDE;
  }

  static #validateMoving(input) {
    if (!BridgeGame.#isMovingKeyword(input)) {
      throw new Error('[ERROR] 이동할 칸 입력 값은 U 또는 D여야 합니다.');
    }
  }
}

module.exports = BridgeGame;
