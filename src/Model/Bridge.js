class Bridge {
  #upBridge = [];
  #downBridge = [];

  constructor() {
    this.upBridge = [];
    this.downBridge = [];
  }

  getTotalBridge() {
    return [this.#upBridge, this.#downBridge];
  }
}
