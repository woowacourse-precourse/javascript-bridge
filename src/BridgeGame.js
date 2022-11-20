/**
 * 다리 건너기 게임을 관리하는 클래스
 */
//  - [ ] BridgeGame에서는 InputView, OutputView 사용 불가능

class BridgeGame {
  #answer;
  #result = [];
  #cnt = 1;
  constructor(answer) {
    this.#answer = answer;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(index, input) {
    let compare;
    this.#answer[index] === input ? (compare = 'O') : (compare = 'X');
    this.#result.push([input, compare]);
    return this.#result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#result = [];
    this.#cnt += 1;
  }

  getCnt() {
    return this.#cnt;
  }

  getResult() {
    return this.#result;
  }
}

module.exports = BridgeGame;
