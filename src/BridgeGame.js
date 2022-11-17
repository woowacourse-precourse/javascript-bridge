const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const { movePossible, getCurrentRoute } = require('./PlayerMove');
const { STATE } = require('./Contants');

class BridgeGame {
  #bridgeSize;

  #bridge;

  #playerPosition;

  #currentRoute;

  #state;

  #tryCount;

  constructor(bridgeSize) {
    this.bridgeSize = bridgeSize;
    this.#bridge = makeBridge(bridgeSize, generate);
    this.#playerPosition = -1;
    this.#state = STATE.PROGRESS;
    this.#tryCount = 1;
    this.#currentRoute = { upBridgeRoute: [], downBridgeRoute: [] };
  }

  move(to) {
    this.#playerPosition += 1;
    const position = this.#playerPosition;
    const possible = movePossible(to, this.#playerPosition, this.bridge);
    this.changeState(possible, this.#bridgeSize - 1 === this.#playerPosition);
    this.#currentRoute = getCurrentRoute(position, this.bridge, possible);
  }

  retry() {
    this.#playerPosition = -1;
    this.changeState(true, false);
    this.#tryCount += 1;
  }

  changeState(possible, end) {
    if (possible) {
      if (end) {
        this.#state = STATE.SUCCESS;
        return;
      }
      this.#state = STATE.PROGRESS;
      return;
    }
    this.#state = STATE.FAIL;
  }

  set bridgeSize(size) {
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

  get currentRoute() {
    return JSON.parse(JSON.stringify(this.#currentRoute));
  }
}

module.exports = BridgeGame;
