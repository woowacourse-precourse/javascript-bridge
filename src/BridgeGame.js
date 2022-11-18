const BridgeState = require('./BridgeState');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userBridge) {
    const crossBridgeResult = [];
    userBridge.forEach((position, index) => {
      this.#checkBridge(position, crossBridgeResult, index);
    });
    return crossBridgeResult;
  }

  #checkBridge(position, crossBridgeResult, index) {
    if (position === this.#bridge[index] && position === 'U') {
      return crossBridgeResult.push(['O', ' ']);
    }
    if (position === this.#bridge[index] && position === 'D') {
      return crossBridgeResult.push([' ', 'O']);
    }
    if (position === 'U') return crossBridgeResult.push(['X', ' ']);
    return crossBridgeResult.push([' ', 'X']);
  }

  draw(moveBridge) {
    let upBridge = '';
    let downBridge = '';

    moveBridge.forEach((position) => {
      upBridge = this.#drawUpBridge(position, upBridge, moveBridge);
      downBridge = this.#drawDownBridge(position, downBridge, moveBridge);
    });
    return [upBridge, downBridge];
  }

  #drawUpBridge(position, upBridge, moveBridge) {
    if (position === moveBridge[0]) {
      upBridge += position[0];
    } else if (position !== moveBridge[0]) {
      upBridge += ` | ${position[0]}`;
    }
    return upBridge;
  }

  #drawDownBridge(position, downBridge, moveBridge) {
    if (position === moveBridge[0]) {
      downBridge += position[1];
    } else if (position !== moveBridge[0]) {
      downBridge += ` | ${position[1]}`;
    }
    return downBridge;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(userBridge) {
    BridgeState.addAttempts();
    userBridge = BridgeState.resetBridge();
    return userBridge;
  }
}

module.exports = BridgeGame;
