const BridgeMaker = require('../BridgeMaker');
const Move = require('./Move');
const Bridge = require('./Bridge');
const NUMBER = require('../../constants/number');
const STRING = require('../../constants/string');
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
    this.#size = NUMBER.ZERO;
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
    this.#bridge = Bridge.init(this.#size);
    this.#index = NUMBER.ZERO;
  }

  move(direction) {
    const currentCell = this.#path[this.#index];

    this.#bridge[direction][this.#index] = Move.byDirection(
      currentCell,
      direction
    );
    this.#index += NUMBER.ONE;
  }

  showBridgeResult() {
    // this 바인딩 활용
    return STRING.DIRECTIONS.map(this.makeValidBridgeForm.bind(this));
    // 화살표 함수 활용
    // return DIRECTIONS.map((DIRECTION) => this.makeValidBridgeForm(DIRECTION));
  }

  makeValidBridgeForm(direction) {
    const validBridgeForm = this.#bridge[direction]
      .slice(NUMBER.ZERO, this.#index)
      .join(STRING.VERTICAL_BAR);
    return `${STRING.LEFT_BAR} ${validBridgeForm} ${STRING.RIGHT_BAR}`;
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  // 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다. */}
  retry() {}
}

module.exports = BridgeGame;
