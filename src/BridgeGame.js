const { MAP, MOVING_SPACE } = require("./util/Constant");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #tryCount;

  #movedSpace;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#tryCount = 1;
    this.#movedSpace = [];
  }

  getBridge() {
    return [...this.#bridge];
  }

  getTryCount() {
    return this.#tryCount;
  }

  getMovedSpace() {
    return [...this.#movedSpace];
  }

  /**
   * 윗길, 아랫길로 각각 정해진 형식에 맞게 파싱한 값을 반환
   * @returns {object}
   */
  getRoadStates() {
    return {
      upRoad: this.#getRoadState(MOVING_SPACE.UP),
      downRoad: this.#getRoadState(MOVING_SPACE.DOWN),
    };
  }

  /**
   * 해당 길의 기록을 정해진 형식에 맞게 반환 (ex: "[ O |   | X ]")
   * @param {string} road 윗길or아랫길 ("U" or "D")
   * @returns {string}
   */
  #getRoadState(road) {
    return (
      MAP.START +
      this.#parseMovedSpaceToRoadLog(road).join(MAP.SEPARATOR) +
      MAP.END
    );
  }

  /**
   * 해당 길의 기록을 반환 (ex: ["O", " ", "X"])
   * @param {string} road 윗길or아랫길 ("U" or "D")
   * @returns {string[]}
   */
  #parseMovedSpaceToRoadLog(road) {
    return this.#movedSpace.map((space, index) => {
      if (space !== road) return MAP.EMPTY;
      if (this.#isLastMoveFailed(index)) return MAP.FAIL;
      return MAP.SUCCESS;
    });
  }

  /**
   * 마지막 이동이 성공인지 실패인지 알려주는 메서드
   * @param {number} index 검사할 요소의 인덱스
   * @returns {boolean}
   */
  #isLastMoveFailed(index) {
    if (index !== this.#movedSpace.length - 1) return false;
    return !this.isSuccessMoved();
  }

  /**
   * 현재 이동한 칸이 성공인지 실패인지 알려주는 메서드
   * @returns {boolean}
   */
  isSuccessMoved() {
    const currentIndex = this.#movedSpace.length - 1;

    if (this.#bridge[currentIndex] === this.#movedSpace[currentIndex])
      return true;
    return false;
  }

  /**
   * 끝까지 도착했는지 알려주는 메서드
   * @returns {boolean}
   */
  isArrive() {
    const bridgeLastIndex = this.#bridge.length - 1;
    const movedSpaceLastIndex = this.#movedSpace.length - 1;

    if (bridgeLastIndex !== movedSpaceLastIndex) return false;
    if (this.#bridge[bridgeLastIndex] !== this.#movedSpace[movedSpaceLastIndex])
      return false;
    return true;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} movingSpace 이동할 칸 ("U" or "D")
   * @returns {boolean} 이동한 칸이 성공인지 실패인지 여부
   */
  move(movingSpace) {
    this.#movedSpace.push(movingSpace);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {function} callback 재시작 시 호출할 함수 (이동할 칸 선택 받기)
   */
  retry(callback) {
    this.#tryCount += 1;
    this.#movedSpace = [];
    callback();
  }
}

module.exports = BridgeGame;
