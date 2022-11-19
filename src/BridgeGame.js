/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #path

  constructor(path) {
    this.#path = path; // 실제 다리
    this.passed = []; // 현재까지 지나온 길
    this.count = 1; // 시도 횟수
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    this.passed.push(command);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.passed = [];
    this.count++;
  }

  /**
   * 현재 다리를 올바르게 건너고 있는지를 판단하는 함수
   * @returns {boolean} 현재 다리를 올바르게 건너고 있는지 여부
   */
  isGoingCorrect() {
    for (let i = 0; i < this.passed.length; i++) {
      if (this.passed[i] !== this.#path[i]) return false;
    }
    return true;
  }

  /**
   * 현재 다리를 완전히 건넜는지 판단하는 함수
   * @returns {boolean} 다리를 완전히 건넜는지 여부
   */
  crossedAll() {
    return this.isGoingCorrect() && (this.passed.length === this.#path.length);
  }

  /**
   * 현재 지나온 길의 위나 아래에 대해 O, X, 혹은 공백 비교 결과를 반환하는 함수
   * @param {string} side 현재 보고 있는 길(U or D)
   * @returns {string[]} 결과 문자열
   */
  getComparisonResultArray(side) {
    let results = [];
    for (let i = 0; i < this.passed.length; i++) {
      const CURRENT_RESULT = this.getComparisonResultByIndex(side, i);
      results.push(CURRENT_RESULT);
    }

    return results;
  }

  /**
   * 현재 지나온 길의 특정 인덱스에 대해 O, X, 혹은 공백을 반환하는 함수
   * @param {string} side 현재 보고 있는 길(U or D)
   * @param {number} index 현재 보고 있는 길의 인덱스
   * @returns {string} 비교 결과(O, X, or space)
   */
  getComparisonResultByIndex(side, index) {
    if (this.passed[index] === side) {
      return (this.passed[index] === this.#path[index]) ? "O" : "X";
    }
    return " "; // 해당 위치를 건너지 않았다면 빈칸
  }
}

module.exports = BridgeGame;
