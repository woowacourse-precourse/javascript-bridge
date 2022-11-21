class BridgeGame {
  constructor(bridge, userBridge){
    this.bridge = bridge;
    this.userBridge = userBridge;
  }
  
  move(moving) {
    this.userBridge.moved.push(moving);
    return this.userBridge.moved;
  }

  status(){
    const moveBy = this.userBridge.moved.length-1;
    if(this.userBridge.moved[moveBy]!==this.bridge[moveBy]){
      return 0; // CAN NOT MOVE
    }
    if(moveBy === this.bridge.length-1){
      return 2; // MOVE COMPLETE
    }
    return 1; // CAN MOVE
  }

  retry() {
    this.userBridge.attempts += 1;
    this.userBridge.moved = [];
  }

  get(){
    return this.userBridge;
  }
}

module.exports = BridgeGame;
