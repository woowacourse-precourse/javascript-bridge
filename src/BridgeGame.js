/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 const { BRIDGE_MOVEMENT } = require("./constants");

class BridgeGame {
  #bridge;

  #bridgeAttempt;


  #upSide = [];

  #downSide = [];

  constructor() {
    this.#bridgeAttempt = 0;
    this.isSuccess = false;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  moveUpside() {
    this.#upSide.push(1);
    this.#downSide.push(0);
  }

  moveDownSide() {
    this.#downSide.push(1);
    this.#upSide.push(0);
  }

  #setGameStatus(moving) {
    this.#gameSuccess = moving == this.#bridge[this.#bridgeAttempt - 1];
  }

  move(moving) {
    moving == BRIDGE_MOVEMENT.UP ? this.moveUpside() : this.moveDownSide();
    this.#bridgeAttempt += 1;
    this.#setGameStatus(moving);

    return [this.#gameSuccess, this.#upSide, this.#downSide];
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
