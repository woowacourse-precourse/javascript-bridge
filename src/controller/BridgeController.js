const BridgeService = require('../service/BridgeService');

class BridgeController {
  #service;

  constructor() {
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
    return {
      map: this.outputmoveMap(),
      ...this.#service.getGameResult()
    };
  }
}

module.exports = BridgeController;
