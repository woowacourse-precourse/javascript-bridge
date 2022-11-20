class BridgeGame {
  constructor(userBridge){
    this.userBridge = userBridge;
  }
  move(moving) {
    this.userBridge.status.push(moving);
    return this.userBridge.status;
  }

  retry() {}
}

module.exports = BridgeGame;
