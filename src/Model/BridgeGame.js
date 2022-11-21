const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { PATH, BLOCK } = require('../Constant/value');

class BridgeGame {
  #bridge;
  #upperTrack;
  #lowerTrack;

  constructor() {
    this.#upperTrack = [];
    this.#lowerTrack = [];
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  getBridge() {
    return this.#bridge;
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

  getUpperTrack() {
    return this.#upperTrack;
  }

  getLowerTrack() {
    return this.#lowerTrack;
  }

  keepGoing() {
    const lastPath = [this.#upperTrack.pop(), this.#lowerTrack.pop()];
    return lastPath.includes(PATH.RIGHT) ? true : false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

