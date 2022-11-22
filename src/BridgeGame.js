/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static BRIDGE_HEIGHT = 2;
  static ROW = {
    U: 0,
    D: 1,
  };
  #userDirections = [];
  #bridgeDirections = [];
  #challengeCount = 0;

  /**
   * @constructor
   * @param {('U'|'D')[]} bridgeDirections - 다리를 건너기 위한 방향 배열('U' 와 'D'로 이루어진 배열)
   */
  constructor(bridgeDirections) {
    this.#bridgeDirections = bridgeDirections;
    this.#challengeCount += 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {('U'|'D')} nextDirection - 이동 방향
   */
  move(nextDirection) {
    this.#userDirections.push(nextDirection);
  }

  /**
   * 사용자가 더 이동할 수 있는지 확인하는 메서드
   * @return {boolean[]} 더 이동 할 수 있으면 true, 없으면 false를 반환
   */
  isMovable() {
    return this.#isStartWith() && this.#hasLessLength();
  }

  #isStartWith() {
    const [bridgeDirections, userDirections] = [this.#bridgeDirections, this.#userDirections];

    return (
      userDirections.filter((userDirection, index) => userDirection === bridgeDirections[index])
        .length === userDirections.length
    );
  }

  #hasLessLength() {
    return this.#userDirections.length < this.#bridgeDirections.length;
  }

  isSuccess() {
    const [bridgeDirections, userDirections] = [this.#bridgeDirections, this.#userDirections];

    return bridgeDirections
      .map((direction, index) => direction === userDirections[index])
      .every((isSame) => isSame);
  }

  getMap() {
    const [bridgeDirections, userDirections] = [this.#bridgeDirections, this.#userDirections];
    const bridegeMap = userDirections.map((direction, index) => {
      const checks = Array.from({length: BridgeGame.BRIDGE_HEIGHT}, () => ' ');
      checks[BridgeGame.ROW[direction]] = direction === bridgeDirections[index] ? 'O' : 'X';

      return checks;
    });
    const [UP, DOWN] = [0, 1];

    return [bridegeMap.map((checks) => checks[UP]), bridegeMap.map((checks) => checks[DOWN])];
  }

  getChallengeCount() {
    return this.#challengeCount;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry() {
    this.#challengeCount += 1;
    this.#userDirections = [];
  }
}

module.exports = BridgeGame;
