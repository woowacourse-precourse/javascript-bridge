const BridgeService = require('../service/BridgeService');

let instance = null;

class BridgeController {
  #service;

  constructor() {
    if (instance) {
      throw new Error('Only one instance is allowed!');
    }

    this.#service = new BridgeService();

    instance = this;
  }

  inputBridgeLength(bridgeLength) {
    this.#service.start(bridgeLength);
  }

  inputBridgeUpDown(command) {
    this.#service.recordMove(command);
  }

  inputRestart() {
    this.#service.restart();
  }

  outputmoveMap() {
    return this.#service.getMoveResult();
  }

  outputExit() {
    return {
      map: this.outputmoveMap(),
      ...this.#service.getGameResult()
    };
  }
}

const singletonBridgeController = Object.freeze(new BridgeController());

module.exports = singletonBridgeController;
