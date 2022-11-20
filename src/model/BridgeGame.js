const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const Bridge = require('./Bridge');
const BridgeMap = require('./BridgeMap');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #round;
  #currentLocation;
  #map;

  constructor() {
    this.round = 1;
    this.#currentLocation = 0;
    this.#map = new BridgeMap();
  }

  setBridge(length) {
    const path = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );

    this.makeBridgeWithPath(path);
  }

  makeBridgeWithPath(path) {
    this.#bridge = new Bridge(path);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const isCorrect = this.#bridge.checkPath(moving, this.#currentLocation);

    this.#map.update(isCorrect, moving);
    this.#currentLocation += 1;

    return isCorrect;
  }

  toStringMap() {
    return this.#map.toString();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
