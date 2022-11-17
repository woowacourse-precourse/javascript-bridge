const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { DIRECTION } = require('./constant');

class Bridge {
  #size;
  #bridgeMap;
  #bridge;

  constructor(size) {
    this.validate(size);
    this.#size = Number(size);
    this.initBridgeMap();
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    console.log(this.#bridge);
  }

  validate() {}

  initBridgeMap() {
    this.#bridgeMap = { U: [], D: [] };
  }

  getSize() {
    return this.#size;
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }

  getBridge() {
    return this.#bridge;
  }

  setBridgeMap(direction, elem) {
    const otherSide = DIRECTION[(Number(DIRECTION[direction]) + 1) % 2];
    this.#bridgeMap[direction].push(elem);
    this.#bridgeMap[otherSide].push(' ');
  }

  updateBridgeMap() {}
}

module.exports = Bridge;
