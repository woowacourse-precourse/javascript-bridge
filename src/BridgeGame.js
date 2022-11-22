const { GameSetting } = require("./constants/Constants");

class BridgeGame {
  #bridge;
  #userBridge;
  
  constructor(bridge, userBridge){
    this.#bridge = bridge;
    this.#userBridge = userBridge;
  }
  
  move(moving) {
    this.#userBridge.moved.push(moving);
    return this.#userBridge.moved;
  }

  status(){
    const moveBy = this.#userBridge.moved.length-1;
    if(this.#userBridge.moved[moveBy]!==this.#bridge[moveBy]){
      return GameSetting.CAN_NOT_MOVE;
    }
    if(moveBy === this.#bridge.length-1){
      return GameSetting.MOVE_COMPLETE;
    }
    return GameSetting.CAN_MOVE;
  }

  retry() {
    this.#userBridge.attempts += 1;
    this.#userBridge.moved = [];
  }

  get(){
    return this.#userBridge;
  }

}

module.exports = BridgeGame;
