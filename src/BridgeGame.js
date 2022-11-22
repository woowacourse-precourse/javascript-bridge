/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { makeBridge } = require('./BridgeMaker');
const { MOVEMENT, BRIDGE_POSITION, MARK } = require('./utils/constructor');

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

  #checkMoveable(movement) {
    const isCorrect = this.#bridge[this.#currentIndex] === movement;
    const isEnd = this.#currentIndex === this.#bridge.length - 1;
    return { isCorrect, isEnd };
  }

  #checkMarking(movement) {
    if (movement === MOVEMENT.UP) {
      return { markedPosition: BRIDGE_POSITION.UP, unmarkedPosition: BRIDGE_POSITION.DOWN };
    }
    return { markedPosition: BRIDGE_POSITION.DOWN, unmarkedPosition: BRIDGE_POSITION.UP };
  }

  #updateMap(isCorrect, marked, unmarked) {
    this.#map[marked].push(isCorrect ? MARK.CORRECT : MARK.WRONG);
    this.#map[unmarked].push(MARK.EMPTY);
  }

  move(movement) {
    const { isCorrect, isEnd } = this.#checkMoveable(movement);
    if (isCorrect) this.#currentIndex += 1;
    
    const { markedPosition, unmarkedPosition } = this.#checkMarking(movement);
    this.#updateMap(isCorrect, markedPosition, unmarkedPosition);

    return { isCorrect, isGameEnd: isEnd && isCorrect, count: this.#count, map: this.#map }
  }

  retry() {
    this.#currentIndex = 0;
    this.#count += 1;
    this.#map = { 1: [], 0: [] };
  }

  setBridge(size, generator) {
    this.#bridge = makeBridge(size, generator);
  }
}

module.exports = BridgeGame;
