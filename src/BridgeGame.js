/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #try;
  #count;
  #upResult;
  #downResult;

  constructor() {
    this.#try = 0;
    this.#count = 0;
    this.#upResult = [];
    this.#downResult = [];
  }

  counting(){
    this.#count += 1;
    return this.#count;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, move) {
    if (bridge == move) {
      if (move == "U") {this.#upResult.push("O"), this.#downResult.push(" ");}
      else {this.#upResult.push(" "), this.#downResult.push("O");}
    }
    else {
      if (move == "U") {this.#upResult.push("X"), this.#downResult.push(" ");}
      else {this.#upResult.push(" "), this.#downResult.push("X");}
    }
    return [this.#upResult, this.#downResult, bridge == move];
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#count = 0;
    this.#try += 1;
    this.#upResult = [];
    this.#downResult = [];
    return this.#try;
  }
}

module.exports = BridgeGame;
