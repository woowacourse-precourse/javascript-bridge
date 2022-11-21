const GameManager = require('./GameManager');
const gameManager = new GameManager();
const Bridge = require('./Bridge');
const bridge = new Bridge();

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  step;
  constructor() {
    // this.#step = 0;
    this.size = 0;
    this.step = 0;
  }

  start() {
    gameManager.askBridgeSize(this.makeBridge);
  }

  makeBridge(size) {
    bridge.make(size);
    gameManager.askWhereToGo(BridgeGame.move);
    // this.retry();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static move(userPosition) {
    const STEP = 10;

    // 현재 건널 위치를 step으로 보낸다.
    // const STEP = this.step;
    // 1. 갈 수 있는 지 다리한테 물어봐
    const IS_USER_CAN_GO = bridge.askUserCanGo(userPosition, STEP);
    // 2.1 갈 수 있으면 또 어디로 가겠냐고 물어봐
    if (IS_USER_CAN_GO) {
      return gameManager.askWhereToGo(BridgeGame.move);
    }
    // 2.2 못 가면 종료 시켜
    // 1. 지도를 그려
    if (!IS_USER_CAN_GO) {
      return gameManager.askRetry(BridgeGame.retry);
      // this.step += 1;
    }
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
