/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #path;
  #tryNum;

  constructor() {
    this.#bridge = [];
    this.#path = [];
    this.#tryNum = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    this.#path.push(moving);

    return checkFall();
  }

  checkFall() {
    const index = this.#path.length-1;
    if(this.#path[index] === this.#bridge[index]) return true;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#path = [];
    this.#tryNum += 1;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

}

module.exports = BridgeGame;
