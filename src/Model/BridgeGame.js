const BridgeMaker = require('../BridgeMaker');
const Move = require('./Move');
const Bridge = require('./Bridge');
const NUMBER = require('../../constants/number');
const { generate } = require('../BridgeRandomNumberGenerator');

// 어떤 변수를 static으로 관리할 수 있을까?
// 다리 건너기 게임을 관리하는 클래스
// InputView, OutputView 호출 불가
class BridgeGame {
  #size;

  #bridge;

  #playCount;

  #index;

  #path;

  constructor() {
    this.#size = 0;
    this.#playCount = NUMBER.ONE;
    this.#bridge = {};
    this.#path = [];
    this.#index = NUMBER.ZERO;
  }

  setBridgeSize(size) {
    this.#size = size;
  }

  makeBridge() {
    this.#path = BridgeMaker.makeBridge(this.#size, generate);
    this.initBridge();
    console.log(this.#path);
  }

  initBridge() {
    this.#bridge = Bridge.initBridge(this.#size);
    this.#index = NUMBER.ZERO;
  }

  // 사용자가 칸을 이동할 때 사용하는 메서드
  // 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다. */}
  move(direction) {
    const currentCell = this.#path[this.#index];

    this.#bridge[direction][this.#index] = Move.byDirection(
      currentCell,
      direction
    );
    this.#index += NUMBER.ONE;
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  // 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다. */}
  retry() {}
}

module.exports = BridgeGame;
