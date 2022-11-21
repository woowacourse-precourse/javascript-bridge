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
    this.validate(size);
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.map.make(this.#bridge);
  }

  validate(size) {}

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
    this.map.drawNowMapWithResult(go, STEP, this.#tries, result);
  }

  resetStep() {
    this.#step = 0;
  }

  addRetrys() {
    this.#tries += 1;
  }
}

module.exports = Bridge;
