class BridgeGame {
  constructor(bridge, userBridge) {
    this.bridge = bridge;
    this.userBridge = userBridge;
    this.attemptCnt = 1;
  }

  move(moving) {
    var idx = this.userBridge.length;

    if (this.bridge[idx] == moving) {
      this.userBridge.push(true);
    } else if (this.bridge[idx] != moving) {
      this.userBridge.push(false);
    }

    return this.userBridge;
  }

  retry() {
    this.attemptCnt += 1;
    this.userBridge = [];
  }
}

module.exports = BridgeGame;
