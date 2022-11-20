class BridgeGame {
  constructor(userBridge){
    this.userBridge = userBridge;
  }
  move(moving) {
    this.userBridge.status.push(moving);
    return this.userBridge.status;
  }

  retry() {
    this.userBridge.attempts += 1;
    this.userBridge.status = [];
  }

  get(){
    return this.userBridge;
  }
}

module.exports = BridgeGame;
