const GameManager = require('./GameManager');
const gameManager = new GameManager();
const Bridge = require('./Bridge');
const bridge = new Bridge();

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {}

  start() {
    gameManager.askBridgeSize(this.makeBridge);
  }

  makeBridge(size) {
    bridge.make(size);
    gameManager.askWhereToGo(BridgeGame.move);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static move(userPosition) {
    const IS_BRIDGE_LEFT = bridge.isBridgeLeft();
    const IS_USER_CAN_GO = bridge.askUserCanGo(userPosition);
    const GO = 'O';
    const CANT_GO = 'X';
    if (IS_BRIDGE_LEFT) {
      if (IS_USER_CAN_GO) {
        bridge.drawMap(GO);
        return gameManager.askWhereToGo(BridgeGame.move);
      }
      if (!IS_USER_CAN_GO) {
        bridge.drawMap(CANT_GO);
        return gameManager.askRetry(BridgeGame.retry);
      }
    }
    if (!IS_BRIDGE_LEFT) {
      bridge.drawMap(GO);
      bridge.drawResultMap(GO);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry(answer) {
    if (answer === 'Q') {
      bridge.drawResultMap();
    }
    if (answer === 'R') {
      bridge.resetStep();
      bridge.addRetrys();
      gameManager.askWhereToGo(BridgeGame.move);
    }
  }
}

module.exports = BridgeGame;
