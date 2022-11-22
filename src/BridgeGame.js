/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #trial = 1;
  #location = 0;
  #result = "실패";

  constructor(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 자동 생성된 다리를 리턴하는 메서드
   */
  getBridge() {
    return this.#bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(nextMove) {
    if (nextMove !== this.#bridge[this.#location]) {
      return this.#bridge.slice(0, this.wrongMove());
    }
    if (this.#location === this.#bridge.length - 1) {
      this.#result = "성공";
    }
    this.#location += 1;
    return this.#bridge.slice(0, this.#location - 1);
  }

  /**
   * 다리를 건너다 실패한 경우 처음 위치로 초기화하는 메서드
   */
  wrongMove() {
    const CURRENT_LOCATION = this.#location;
    this.#location = 0;
    return CURRENT_LOCATION;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#trial += 1;
    return;
  }

  /**
   * 시도 횟수를 리턴하는 메서드
   */
  getTrial() {
    return this.#trial;
  }

  /**
   * 게임 성공 여부를 리턴하는 메서드
   */
  getResult() {
    return this.#result;
  }
}

module.exports = BridgeGame;
