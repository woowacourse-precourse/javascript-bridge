const BridgeMaker = require("./BridgeMaker");
const BridgeRandomGenerator = require("./BridgeRandomNumberGenerator");

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
    this.#phase = 1;
    this.#try = 1;
    this.#result = "실패";
  }

  pushResult(direction) {
    let result = { U: " ", D: " " };
    this.#bridge[this.#phase - 1] === direction
      ? (result[direction] = "O")
      : (result[direction] = "X");
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
    if (upValues.includes("X") || downValues.includes("X")) {
      this.#phase = 1;
      return false;
    }
    return true;
  }

  isEnd() {
    if (this.#phase === this.#bridge.length) {
      this.#result = "성공";
      return true;
    }
  }

  move() {
    return (this.#phase += 1);
  }

  retry() {
    this.#phase = 1;
    this.#map = {
      upStair: [],
      downStair: [],
    };
    this.#try += 1;
  }
}

module.exports = BridgeGame;
