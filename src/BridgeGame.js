const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const COMPARE_RET_MAP = { true: 'O', false: 'X' };

class BridgeGame {
  #bridge;
  #playerMove;
  #mapUp;
  #mapDown;
  #isFinish;
  #compareValue;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#playerMove = [];
    this.#mapUp = [];
    this.#mapDown = [];
    this.#isFinish = false;
    this.#compareValue = true;
  }

  move(move) {
    this.#playerMove.push(move);
    if (move === 'U') this.#updateMapUp();
    if (move === 'D') this.#updateMapDown();
  }
  #updateMapUp() {
    const i = this.#mapUp.length;
    this.#compareValue = this.#bridge[i] === this.#playerMove[i];
    this.#mapUp.push(COMPARE_RET_MAP[this.#compareValue]);
    this.#mapDown.push(' ');
    if (i + 1 === this.#bridge.length && this.#compareValue === true) {
      this.#isFinish = true;
    }
  }
  #updateMapDown() {
    const i = this.#mapDown.length;
    this.#compareValue = this.#bridge[i] === this.#playerMove[i];
    this.#mapUp.push(' ');
    this.#mapDown.push(COMPARE_RET_MAP[this.#compareValue]);
    if (i + 1 === this.#bridge.length && this.#compareValue === true) {
      this.#isFinish = true;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
