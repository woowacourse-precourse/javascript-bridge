const Constant = require("../utils/Constant");
class Bridges {
  #upBridge;
  #downBridge;
  constructor() {
    this.#upBridge;
    this.#downBridge;
  }

  initializeBridges() {
    this.#upBridge = "";
    this.#downBridge = "";
  }

  saveBridges(bridges) {
    this.#upBridge = bridges[0];
    this.#downBridge = bridges[1];
  }

  getAllBridges() {
    return [this.#upBridge, this.#downBridge];
  }

  getUpBridge() {
    return this.#upBridge;
  }

  getDownBridge() {
    return this.#downBridge;
  }
}

module.exports = Bridges;
