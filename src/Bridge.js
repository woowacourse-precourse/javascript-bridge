const BridgeMaker = require('./BridgeMaker.js');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Map = require('./Map');

class Bridge {
  #bridge;
  #step;
  #size;
  #tries;

  constructor() {
    this.map = new Map();
    this.#step = 0;
    this.#size;
    this.#tries = 1;
  }

  make(size) {
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.map.makeOriginBridgeMap(this.#bridge);
    return this.#bridge;
  }

  isBridgeLeft() {
    return this.#step + 1 < this.#size;
  }

  askUserCanGo(userPosition) {
    if (this.#bridge[this.#step] === userPosition) return true;
    return false;
  }

  drawNowMap(go) {
    this.map.drawNowMap(go, this.#step);
    this.#step += 1;
  }

  drawResultMap(go, result) {
    const STEP = this.#step - 1;
    const RESULT = { tries: this.#tries, status: result };
    this.map.drawNowMapWithResult(go, STEP, RESULT);
  }

  resetStep() {
    this.#step = 0;
  }

  addRetrys() {
    this.#tries += 1;
  }
}

module.exports = Bridge;
