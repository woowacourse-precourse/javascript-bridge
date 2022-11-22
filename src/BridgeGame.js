/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveRoute;
  #index;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#moveRoute = [[], []];
    this.#index = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selectedBlock) {
    if (selectedBlock === this.#bridge[this.#index]) {
      this.markCorrect(selectedBlock);
    } else if (selectedBlock !== this.#bridge[this.#index]) {
      this.markWrong(selectedBlock);
    }

    return this.#moveRoute;
  }

  markCorrect(selectedBlock) {
    if (selectedBlock === "U") {
      this.#moveRoute[0].push("O");
      this.#moveRoute[1].push(" ");
      this.#index += 1;
    }

    if (selectedBlock === "D") {
      this.#moveRoute[0].push(" ");
      this.#moveRoute[1].push("O");
      this.#index += 1;
    }
  }

  markWrong(selectedBlock) {
    if (selectedBlock === "U") {
      this.#moveRoute[0].push("X");
      this.#moveRoute[1].push(" ");
    }

    if (selectedBlock === "D") {
      this.#moveRoute[0].push(" ");
      this.#moveRoute[1].push("X");
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
