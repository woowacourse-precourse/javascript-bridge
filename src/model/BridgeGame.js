const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const Bridge = require('./Bridge');
const GameState = require('./GameState');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #round;

  #bridge;

  #gameState;

  constructor() {
    this.#round = 1;
  }

  set(length) {
    this.getBridgeInfo(length);
    this.#gameState = new GameState(this.#bridge);
  }

  getBridgeInfo(length) {
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
    return this.#gameState.checkBridgePath(moving);
  }

  getStringMap() {
    return this.#gameState.toStringMap();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#round += 1;
    this.#gameState = new GameState(this.#bridge);
  }

  getRound() {
    return this.#round;
  }

  getResult() {
    const isDestination = this.#gameState.checkLocation();

    return [this.getRound(), isDestination];
  }
}

module.exports = BridgeGame;
