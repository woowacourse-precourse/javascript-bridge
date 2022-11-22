const BridgeState = require('./BridgeState');

class BridgeGame {
  constructor() {
    BridgeState.addTryCount();
    BridgeState.initializeUserBridge();
  }

  move(moving) {
    BridgeState.addUserBridgeMoving(moving);
  }

  retry() {
    const isSuccess = BridgeState.isSuccess();
    if (!isSuccess) return true;
  }

  allDone() {
    const isAllDone = BridgeState.isAllDone();

    if (isAllDone) {
      BridgeState.setIsClear(true);
      return true;
    }
  }
}

module.exports = BridgeGame;
