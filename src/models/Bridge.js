const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { DIRECTION } = require('../constant');
const { sizeValidityCheck } = require('../Validator');

class Bridge {
  #bridgeMap;
  #bridge;

  constructor(size) {
    sizeValidityCheck(size);
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    this.initMap();
    console.log(this.#bridge);
  }

  initMap() {
    this.#bridgeMap = { U: [], D: [] };
  }

  getSize() {
    return this.#bridge.length;
  }

  getMap() {
    return this.#bridgeMap;
  }

  getBridge() {
    return this.#bridge;
  }

  updateMap(direction, elem) {
    const otherSide = DIRECTION[(DIRECTION[direction] + 1) % 2];
    this.#bridgeMap[direction].push(elem);
    this.#bridgeMap[otherSide].push(' ');
  }
}

module.exports = Bridge;
