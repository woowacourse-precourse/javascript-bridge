const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { PATH, BLOCK } = require('../Constants');

class BridgeGame {
  #bridge;
  #upperTrack;
  #lowerTrack;
  #success;
  #trial;

  constructor() {
    this.#upperTrack = [];
    this.#lowerTrack = [];
    this.#success = false;
    this.#trial = 1;
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  move(direction) {
    const nextBlock = this.#upperTrack.length;
    if (direction === BLOCK.LOWER) return this.moveDown(direction, nextBlock);
    if (direction === BLOCK.UPPER) return this.moveUp(direction, nextBlock);
  }

  moveUp(direction, nextBlock) {
    this.#lowerTrack.push(PATH.NOT_CHOSEN);
    if (direction === this.#bridge[nextBlock]) this.#upperTrack.push(PATH.RIGHT);
    if (direction !== this.#bridge[nextBlock]) this.#upperTrack.push(PATH.WRONG);
  }

  moveDown(direction, nextBlock) {
    this.#upperTrack.push(PATH.NOT_CHOSEN);
    if (direction === this.#bridge[nextBlock]) this.#lowerTrack.push(PATH.RIGHT);
    if (direction !== this.#bridge[nextBlock]) this.#lowerTrack.push(PATH.WRONG);
  }

  isWrongPath() {
    const currentLocation = this.#upperTrack.length - 1;
    const lastPath = [this.#upperTrack[currentLocation], this.#lowerTrack[currentLocation]];
    return lastPath.includes(PATH.WRONG) ? true : false;
  }

  isSuccess() {
    const path = [...this.#lowerTrack, ...this.#upperTrack];
    if (this.#upperTrack.length === this.#bridge.length && !path.includes(PATH.WRONG)) {
      this.#success = true;
    }
    return this.#success;
  }

  retry() {
    this.#trial += 1;
    this.#upperTrack = [];
    this.#lowerTrack = [];
  }

  getUpperTrack() {
    return this.#upperTrack;
  }

  getLowerTrack() {
    return this.#lowerTrack;
  }

  getTrialCount() {
    return this.#trial;
  }
}

module.exports = BridgeGame;

