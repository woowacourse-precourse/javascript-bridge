const { validate } = require('../validators');
const Bridge = require('./Bridge');
const Moving = require('./Moving');
const BridgeError = require('../errors/BridgeError');

/**
 * 다리를 건너는 플레이어 클래스 입니다.
 */
class Player {
  /** @type {Bridge} */
  #bridge;

  /** @type {Moving[]} */
  #movingHistory = [];

  /**
   * @param {Bridge} bridge
   */
  constructor(bridge) {
    this.#bridge = validate(bridge).shouldInstanceOf(Bridge).get();
  }

  /**
   * 다음에 이동할 위치를 반환한다.
   *
   * @returns {number}
   */
  getNextPosition() {
    return this.#movingHistory.length;
  }

  /**
   * @returns {Moving[]}
   */
  getMovingHistory() {
    return this.#movingHistory;
  }

  /**
   * 다음 위치에 주어진 타일로 이동한다.
   *
   * @param {string} tile
   * @returns {boolean} 이동 성공 여부
   */
  move(tile) {
    validate(this.isArrived()).shouldBe(false, () => new BridgeError('다리를 이미 다 건넜습니다.'));

    const survived = this.#bridge.getTileAt(this.getNextPosition()) === tile;
    this.#movingHistory.push(new Moving(tile, survived));
    return survived;
  }

  /**
   * 다리를 다 건넜는지 여부를 반환한다.
   *
   * @returns {boolean}
   */
  isArrived() {
    return this.getNextPosition() >= this.#bridge.getSize();
  }
}

module.exports = Player;
