/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { MOVEMENT, BRIDGE_POSITION, MARK } = require('./constructor.js');
class BridgeGame {
  #bridge
  #currentIndex
  #count
  #map

  constructor() {
    this.#bridge = [];
    this.#currentIndex = 0;
    this.#count = 1;
    this.#map = { 1: [], 0: [] };
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movement) {
    const isCorrect = this.#bridge[this.#currentIndex] === movement;
    const isEnd = this.#currentIndex === this.#bridge.length - 1;
    const markedPosition = movement === MOVEMENT.UP ? BRIDGE_POSITION.UP : BRIDGE_POSITION.DOWN;
    const unmarkedPosition = movement === MOVEMENT.UP ? BRIDGE_POSITION.DOWN : BRIDGE_POSITION.UP;
    
    if (isCorrect) this.#currentIndex += 1;
    this.#map[markedPosition].push(isCorrect ? MARK.CORRECT : MARK.WRONG);
    this.#map[unmarkedPosition].push(MARK.EMPTY);
    
    return { isCorrect, isEnd, count: this.#count, map: this.#map,  }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#currentIndex = 0;
    this.#count += 1;
    this.#map = { 1: [], 0: [] };
  }
}

module.exports = BridgeGame;
