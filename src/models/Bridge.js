const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { DIRECTION } = require('../constant');
const { sizeValidityCheck } = require('../Validator');

class Bridge {
  #size;
  #bridgeMap;
  #bridge;

  constructor(size) {
    sizeValidityCheck(size);
    this.#size = Number(size);
    this.initMap();
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    console.log(this.#bridge);
  }

  initMap() {
    this.#bridgeMap = { U: [], D: [] };
  }

  getSize() {
    return this.#size;
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
