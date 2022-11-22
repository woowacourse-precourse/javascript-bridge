const BridgeState = require('./BridgeState');

/**
 * BridgeGame 상태를 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    BridgeState.addTryCount();
    BridgeState.initializeUserBridge();
  }

  /**
   * 다리를 건넌다.
   *
   * @param {MOVE_TYPE} moving
   */
  move(moving) {
    BridgeState.addUserBridgeMoving(moving);
  }

  /**
   * 재시도를 해야하는지 판단한다.
   *
   * @returns {(boolean | undefined)}
   */
  retry() {
    const isSuccess = BridgeState.isSuccess();
    if (!isSuccess) return true;
  }

  /**
   * 게임이 끝났는지 판단한다.
   *
   * @returns {(boolean | undefined)}
   */
  allDone() {
    const isAllDone = BridgeState.isAllDone();

    if (isAllDone) {
      BridgeState.setIsClear(true);
      return true;
    }
  }
}

module.exports = BridgeGame;
