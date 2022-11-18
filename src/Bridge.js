const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { DIRECTION } = require('./constant');
const Validator = require('./Validator');
const { sizeValidityCheck } = require('./Validator');

class Bridge {
  #size;
  #bridgeMap;
  #bridge;

  constructor(size) {
    sizeValidityCheck(size);
    this.#size = Number(size);
    this.initBridgeMap();
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    console.log(this.#bridge);
  }

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

  updateBridgeMap(direction, elem) {
    const otherSide = DIRECTION[(Number(DIRECTION[direction]) + 1) % 2];
    this.#bridgeMap[direction].push(elem);
    this.#bridgeMap[otherSide].push(' ');
  }
}

module.exports = Bridge;
