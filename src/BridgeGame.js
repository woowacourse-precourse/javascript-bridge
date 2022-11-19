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
}

module.exports = BridgeGame;
