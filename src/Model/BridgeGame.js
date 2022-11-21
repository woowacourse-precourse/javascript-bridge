const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { PATH } = require('../Constant/value');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #upperTrack;
  #lowerTrack;

  constructor() {
    this.#upperTrack = [];
    this.#lowerTrack = [];
  }

  set(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const nextBlock = this.#upperTrack.length;
    if (direction === BridgeMaker.LOWER_BLOCK) return this.moveDown(direction, nextBlock);
    if (direction === BridgeMaker.UPPER_BLOCK) return this.moveUp(direction, nextBlock);
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

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

