class Bridge {
  #bridge

  constructor(bridge) {
    this.#bridge = bridge;
  }

  matchMoveBridge(moving,step){
    if(moving === this.#bridge[step]){
      return true;
    }
    return false;
  }

  isReach(step) {
    if(step === this.#bridge.length-1){
      return true;
    }
    return false;
  }
}

module.exports = Bridge;
