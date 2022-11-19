const DIRECTION = require('./Constants/direction');
const Validator = require('./Validator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #records;

  #retry;

  #step;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#retry = 1;
    this.#records = [];
    this.#step = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(direction) {
    Validator.checkCorrectDirection(direction);
    const dir = BridgeGame.isGoUp(direction) ? DIRECTION.up : DIRECTION.down;
    this.#step += 1;
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
    this.addRetry();
    this.initRecords();
  }

  addRetry() {
    this.#retry += 1;
  }

  initRecords() {
    this.#records = [];
  }

  /**
   * 다리를 생성하는데 필요한 토큰을 만드는 메서드
   */
  static createTokens(size, generateRandomNumber) {
    const tokens = [];
    let count = 0;
    while (count < size) {
      tokens.push(generateRandomNumber());
      count += 1;
    }
    return tokens;
  }

  /**
   * 현재 이동한 횟수를 반환하는 함수
   */
  getCurrentDistance() {
    return this.#records.length - 1;
  }

  /**
   * 유저가 선택한 칸(방향)을 반환하는 함수
   */
  getSelectedDirection() {
    return this.#records[this.getCurrentDistance()];
  }

  /**
   * 다음 다리 방향을 반환하는 함수
   */
  getNextDirection() {
    return this.#bridge[this.getCurrentDistance()];
  }

  /**
   * 게임 프로세스
   */
  static process(game, direction) {
    return game.move(direction);
  }

  /**
   * 다리의 끝에 도달했는지 검사하는 메서드
   */
  isEndOfBridge() {
    if (this.#records.length === this.#bridge.length) return true;
    return false;
  }

  isEndOfBridge2() {
    if (this.#step === this.#bridge.length) return true;
    return false;
  }

  /**
   * 게임 재시도 횟수 출력
   */
  getAttemptCount() {
    return this.#retry;
  }

  /**
   * 게임 맵 배열 반환 메서드
   */
  getBridge() {
    return this.#bridge;
  }

  getRecords() {
    return this.#records;
  }

  /**
   * 게임 승리/패배 여부 반환 메서드
   */
  getGameResult() {
    if (
      this.isEndOfBridge() &&
      this.#bridge[this.getCurrentDistance()] ===
        this.#records[this.getCurrentDistance()]
    )
      return '성공';
    return '실패';
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
