const { RESULT } = require('./Constants/contant');
const DIRECTION = require('./Constants/direction');
const Validator = require('./Validator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #records;

  #retry;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#retry = 1;
    this.#records = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(direction) {
    Validator.checkCorrectDirection(direction);
    const dir = BridgeGame.isGoUp(direction) ? DIRECTION.up : DIRECTION.down;
    return this.recordDirection(dir);
  }

  static isGoUp(direction) {
    Validator.checkCorrectDirection(direction);
    if (direction === DIRECTION.up) return true;
    return false;
  }

  recordDirection(direction) {
    this.#records = BridgeGame.addDirection(direction, this.#records);
  }

  static addDirection(direction, records) {
    return [...records, direction];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry() {
    this.addRetryCount(1);
    this.initRecords();
  }

  addRetryCount(count) {
    this.#retry += count;
  }

  initRecords() {
    this.#records = [];
  }

  static createTokens(size, generateRandomNumber) {
    const tokens = [];
    let count = 0;
    while (count < size) {
      tokens.push(generateRandomNumber());
      count += 1;
    }
    return tokens;
  }

  getCurrentDistance() {
    return this.#records.length - 1;
  }

  static process(game, direction) {
    return game.move(direction);
  }

  isEndOfBridge() {
    if (this.#records.length === this.#bridge.length) return true;
    return false;
  }

  getRetryCount() {
    return this.#retry;
  }

  getBridge() {
    return this.#bridge;
  }

  getRecords() {
    return this.#records;
  }

  getGameResult() {
    if (this.isGameSuccess()) return RESULT.success;
    return RESULT.fail;
  }

  isGameSuccess() {
    if (
      this.isEndOfBridge() &&
      this.#bridge[this.getCurrentDistance()] ===
        this.#records[this.getCurrentDistance()]
    )
      return true;
    return false;
  }

  isSameDirection() {
    if (
      this.#records[this.getCurrentDistance()] ===
      this.#bridge[this.getCurrentDistance()]
    )
      return true;
    return false;
  }
}

module.exports = BridgeGame;
