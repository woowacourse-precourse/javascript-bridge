const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator.js');
const { CHECK } = require('../constants/Constant.js');

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
    if (CHECK.PLAYING(this.#bridge, this.#currentPos, value)) this.#isPlaying = false;
  }

  cellValidator(index) {
    return CHECK.CELL(this.#currentPos, this.#bridge, index);
  }

  detectWinner() {
    return CHECK.WINNER(this.#currentPos, this.#bridge, this.#isPlaying);
  }

  isSuccess() {
    return CHECK.ARRAY(this.#bridge, this.#currentPos);
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
