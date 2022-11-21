const BridgeService = require('../service/BridgeService');
const { ERROR_MESSAGE } = require('../utils/constants');

let instance = null;

class BridgeController {
  #service;

  constructor() {
    if (instance) {
      throw new Error(ERROR_MESSAGE.singleton);
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

module.exports = Object.freeze(new BridgeController());
