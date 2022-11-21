class BridgeMap {
  #bridgeMap;

  constructor() {
    this.#bridgeMap = [];
  }

  drawMap(isMatch) {
    const result = isMatch? 'O' : 'X';
    this.#bridgeMap = [...this.#bridgeMap, result];
  }
}

module.exports = BridgeMap;