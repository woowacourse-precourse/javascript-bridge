class BridgeShape {
  #bridgeMap;

  constructor() {
    this.#bridgeMap = { U: [], D: [] };
  }

  initBridgeMap() {
    this.#bridgeMap['U'] = [];
    this.#bridgeMap['D'] = [];
  }

  addBridgeMap(inputCommand, compareResult) {
    this.#bridgeMap['U'].push(' ');
    this.#bridgeMap['D'].push(' ');
    this.#bridgeMap[inputCommand].pop();
    this.#bridgeMap[inputCommand].push(compareResult);
  }

  currentBridgeMap() {
    return this.#bridgeMap;
  }
}

module.exports = BridgeShape;
