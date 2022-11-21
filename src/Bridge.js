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
}

module.exports = Bridge;
