const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator.js');

class BridgeGame {
  #bridge;

  #currentPos;

  #isPlaying;

  #attempt;

  constructor() {
    this.#bridge = [];
    this.#currentPos = [];
    this.#isPlaying = true;
    this.#attempt = 1;
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  checkBridge(value) {
    if (this.#bridge[this.#currentPos.length] !== value) this.#isPlaying = false;
  }

  cellValidator(index) {
    return this.#currentPos[index] === this.#bridge[index];
  }

  detectWinner() {
    return (this.#currentPos.length === this.#bridge.length) && this.#isPlaying;
  }

  isSuccess() {
    return JSON.stringify(this.#bridge) === JSON.stringify(this.#currentPos);
  }

  move(direction) {
    this.checkBridge(direction);
    this.#currentPos.push(direction);
  }

  get isPlaying() {
    return this.#isPlaying;
  }

  get currentPos() {
    return this.#currentPos;
  }

  get attempt() {
    return this.#attempt;
  }

  retry() {
    this.#currentPos = [];
    this.#isPlaying = true;
    this.#attempt += 1;
  }
}

module.exports = BridgeGame;
