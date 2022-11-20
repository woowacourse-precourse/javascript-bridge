const BridgeMaker = require('../BridgeMaker');
const Move = require('./Move');
const Bridge = require('./Bridge');
const NUMBER = require('../../constants/number');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  #size;

  #path;

  #bridge;

  #playCount;

  constructor() {
    this.#size = NUMBER.ZERO;
    this.#path = [];
    this.#bridge = {};
    this.#playCount = NUMBER.ONE;
  }

  setBridgeSize(size) {
    this.#size = size;
  }

  makeBridge() {
    this.#path = BridgeMaker.makeBridge(this.#size, generate);
    this.initBridge();
    console.log(this.#path);
  }

  initBridge() {
    this.#bridge = Bridge.init(this.#size);
    Move.init();
  }

  move(direction) {
    const countIndex = Move.showCount();
    const currentCell = this.#path[countIndex];

    this.#bridge[direction][countIndex] = Move.byDirection(
      currentCell,
      direction
    );
  }

  mapBridge() {
    return Bridge.makeValidForm(this.#bridge, Move.showCount());
  }

  canMove() {
    return Move.canMove(this.#path);
  }

  getPlayCount() {
    return this.#playCount;
  }

  retry() {
    this.#playCount += NUMBER.ONE;
    this.initBridge();
  }
}

module.exports = BridgeGame;
