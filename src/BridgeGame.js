const BridgeState = require('./BridgeState');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #crossResult;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#crossResult = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userBridge) {
    userBridge.forEach((position, i) => {
      if (position === this.#bridge[i] && position === 'U') {
        return this.#crossResult.push(['O', ' ']);
      } else if (position === this.#bridge[i] && position === 'D') {
        return this.#crossResult.push([' ', 'O']);
      } else if (position === 'U') return this.#crossResult.push(['X', ' ']);
      return this.#crossResult.push([' ', 'X']);
    });
    return this.#crossResult;
  }

  draw() {
    let upBridge = '';
    let downBridge = '';

    this.#crossResult.forEach((position) => {
      upBridge = this.drawUpBridge(position, upBridge);
      downBridge = this.drawDownBridge(position, downBridge);
    });
    return [upBridge, downBridge];
  }

  drawUpBridge(position, upBridge) {
    if (position === this.#crossResult[0]) {
      upBridge += position[0];
    } else if (position !== this.#crossResult[0]) {
      upBridge += ` | ${position[0]}`;
    }
    return upBridge;
  }

  drawDownBridge(position, downBridge) {
    if (position === this.#crossResult[0]) {
      downBridge += position[1];
    } else if (position !== this.#crossResult[0]) {
      downBridge += ` | ${position[1]}`;
    }
    return downBridge;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
