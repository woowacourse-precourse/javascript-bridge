const BridgeMaker = require("./BridgeMaker");
const BridgeRandomGenerator = require("./BridgeRandomNumberGenerator");
const { BRIDGE_INFO } = require("./constants/constants");
const { CONSOLE_MESSAGE } = require("./constants/Message");
class BridgeGame {
  #map;
  #bridge;
  #phase;
  #try;
  #result;

  constructor(size) {
    this.#map = {
      upStair: [],
      downStair: [],
    };
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomGenerator.generate);
    this.#phase = BRIDGE_INFO.FIRST_PHASE;
    this.#try = BRIDGE_INFO.FIRST_TRY;
    this.#result = CONSOLE_MESSAGE.FAIL;
  }

  pushResult(direction) {
    let result = { U: " ", D: " " };
    this.#bridge[this.#phase - 1] === direction
      ? (result[direction] = BRIDGE_INFO.CORRECT)
      : (result[direction] = BRIDGE_INFO.WRONG);
    this.#map.upStair.push(result.U);
    this.#map.downStair.push(result.D);
    return this.#map;
  }

  getMap() {
    return this.#map;
  }

  getResult() {
    return this.#result;
  }

  getTry() {
    return this.#try;
  }

  isRight() {
    const upValues = Object.values(this.#map.upStair);
    const downValues = Object.values(this.#map.downStair);
    if (
      upValues.includes(BRIDGE_INFO.WRONG) ||
      downValues.includes(BRIDGE_INFO.WRONG)
    ) {
      this.#phase = BRIDGE_INFO.FIRST_PHASE;
      return false;
    }
    return true;
  }

  isEnd() {
    if (this.#phase === this.#bridge.length) {
      this.#result = CONSOLE_MESSAGE.WIN;
      return true;
    }
  }

  move() {
    return (this.#phase += 1);
  }

  retry() {
    this.#phase = BRIDGE_INFO.FIRST_PHASE;
    this.#map = {
      upStair: [],
      downStair: [],
    };
    this.#try += 1;
  }
}

module.exports = BridgeGame;
