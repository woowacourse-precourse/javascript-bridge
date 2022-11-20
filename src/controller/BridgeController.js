const BridgeService = require('../service/BridgeService');

let instance = null;

class BridgeController {
  #service;

  constructor() {
    if (instance) {
      throw new Error('Only one instance is allowed!');
    }

    instance = this;

    this.#service = new BridgeService();
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
    return this.#service.getGameResult();
  }
}

const singletonController = Object.freeze(new BridgeController());

module.exports = singletonController;
