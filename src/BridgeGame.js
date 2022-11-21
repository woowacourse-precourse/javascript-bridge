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
    const IS_USER_CAN_GO = bridge.askUserCanGo(userPosition);
    if (IS_USER_CAN_GO) {
      const GO = 'O';
      bridge.drawMap(GO);
      return gameManager.askWhereToGo(BridgeGame.move);
    }
    if (!IS_USER_CAN_GO) {
      const CANT_GO = 'X';
      bridge.drawMap(CANT_GO);
      return gameManager.askRetry(BridgeGame.retry);
    }
    BridgeGame.step += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry() {
    gameManager.askRetry();
  }
}

module.exports = BridgeGame;
