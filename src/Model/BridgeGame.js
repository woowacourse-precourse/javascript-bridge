const BridgeMaker = require('../BridgeMaker');
const Move = require('./Move');
const Bridge = require('./Bridge');
const NUMBER = require('../../constants/number');
const { generate } = require('../BridgeRandomNumberGenerator');

// InputView, OutputView 호출 불가
class BridgeGame {
  #size;

  #bridge;

  #path;

  constructor() {
    this.#size = NUMBER.ZERO;
    this.#playCount = NUMBER.ONE;
    this.#bridge = {};
    this.#path = [];
  }

  setBridgeSize(size) {
    this.#size = size;
  }

  makeBridge() {
    this.#path = BridgeMaker.makeBridge(this.#size, generate);
    this.initBridge();
  }

  initBridge() {
    this.#bridge = Bridge.init(this.#size);
    Move.init();
  }

  move(direction) {
    const countIndex = Move.showCount();
    const currentCell = this.#path[countIndex];

    // 한 줄로 줄이기
    this.#bridge[direction][countIndex] = Move.byDirection(
      currentCell,
      direction
    );
  }

  mapBridge() {
    return Bridge.makeValidForm(this.#bridge, Move.showCount());
  }

  canMove() {
    return Move.canMove(this.#path);
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  // 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다. */}
  retry() {}
}

module.exports = BridgeGame;
