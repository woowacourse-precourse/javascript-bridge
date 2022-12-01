class Bridge {
  upBridge = [];
  downBridge = [];

  constructor() {
    this.upBridge = [];
    this.downBridge = [];
  }

  getAllBridge() {
    return [this.upBridge, this.downBridge];
  }
}

module.exports = Bridge;
