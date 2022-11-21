const { COMMAND } = require('./Constants.js');

class BridgeShape {
  #bridgeMap;

  constructor() {
    this.#bridgeMap = { U: [], D: [] };
  }

  initBridgeMap() {
    this.#bridgeMap[COMMAND.UP] = [];
    this.#bridgeMap[COMMAND.DOWN] = [];
  }

  addBridgeMap(inputCommand, compareResult) {
    this.#bridgeMap[COMMAND.UP].push(' ');
    this.#bridgeMap[COMMAND.DOWN].push(' ');
    this.#bridgeMap[inputCommand].pop();
    this.#bridgeMap[inputCommand].push(compareResult);
  }

  currentBridgeMap() {
    return this.#bridgeMap;
  }
}

module.exports = BridgeShape;
