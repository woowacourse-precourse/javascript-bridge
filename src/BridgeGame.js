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
  #tryCnt;

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
    this.#tryCnt = 1;
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

  getMapUp() {
    return this.#mapUp;
  }

  getMapDown() {
    return this.#mapDown;
  }

  retry() {
    this.#mapUp.pop();
    this.#mapDown.pop();
    this.#playerMove.pop();
    ++this.#tryCnt;
  }
  isWrong() {
    return this.#compareValue === false;
  }

  isFinish() {
    return this.#isFinish === true;
  }

  getTryCnt() {
    return this.#tryCnt;
  }
}

module.exports = BridgeGame;
