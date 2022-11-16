const { BRIDGE_RULE } = require('../constants');
const Bridge = require('./Bridge');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

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
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  static #validateSize(size) {
    if (size < BRIDGE_RULE.LENGTH_MIN || size > BRIDGE_RULE.LENGTH_MAX) {
      throw new Error('[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.');
    }
  }
}

module.exports = BridgeGame;
