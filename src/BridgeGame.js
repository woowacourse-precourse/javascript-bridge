const { BRIDGE } = require('./constant');

class BridgeGame {
  #bridge;
  #order;
  #map;
  #tryCount;
  #isPass;

  constructor() {
    this.#order = 0;
    this.#map = [[], []];
    this.#tryCount = 1;
    this.#isPass = true;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  isEnd() {
    if (this.#bridge.length === this.#order) return true;
  }

  move(move) {
    if (this.#bridge[this.#order].includes(move)) {
      return true;
    }
    return false;
  }

  success(move) {
    this.#order += 1;
    move === BRIDGE.UP
      ? this.upSideMap(BRIDGE.CROSS_SUCCESS)
      : this.downSideMap(BRIDGE.CROSS_SUCCESS);
  }

  fail(move) {
    this.#isPass = false;
    move === BRIDGE.UP
      ? this.upSideMap(BRIDGE.CROSS_FAIL)
      : this.downSideMap(BRIDGE.CROSS_FAIL);
  }

  upSideMap(result) {
    this.#map[0].push(result);
    this.#map[1].push(' ');
  }

  downSideMap(result) {
    this.#map[0].push(' ');
    this.#map[1].push(result);
  }

  getMap() {
    return this.#map;
  }

  getResult() {
    return { try: this.#tryCount, isPass: this.#isPass };
  }

  retry() {
    this.#map = [[], []];
    this.#order = 0;
    this.#isPass = true;
    this.#tryCount += 1;
  }
}

module.exports = BridgeGame;
