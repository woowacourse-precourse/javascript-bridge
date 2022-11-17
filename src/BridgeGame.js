const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const { movePossible, getCurrentRoute } = require('./PlayerMove');
const { STATE } = require('./Contants');

class BridgeGame {
  #bridgeSize;

  #bridge;

  #playerPosition;

  #state;

  #tryCount;

  constructor(bridgeSize) {
    this.bridgeSize = bridgeSize;
    this.#bridge = makeBridge(bridgeSize, generate);
    this.#playerPosition = -1;
    this.#state = STATE.PROGRESS;
    this.#tryCount = 1;
  }

  move(to) {
    this.#playerPosition += 1;
    const position = this.#playerPosition;
    const possible = movePossible(to, this.#playerPosition, this.bridge);
    if (!possible) this.#state = STATE.FAIL;
    if (possible && this.#bridgeSize - 1 === this.#playerPosition) this.#state = STATE.SUCCESS;
    return getCurrentRoute(position, this.bridge, possible);
  }

  retry() {
    this.#playerPosition = -1;
    this.#state = STATE.PROGRESS;
    this.#tryCount += 1;
  }

  set bridgeSize(size) {
    // TODO: 입력받은 size가 유효한지 확인 기능 추가
    this.#bridgeSize = size;
  }

  get bridge() {
    return JSON.parse(JSON.stringify(this.#bridge));
  }

  get state() {
    return this.#state;
  }

  get tryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
