class GameMap {
  #bridgeGameMap;

  setBridgeGameMap(gameMap) {
    this.#bridgeGameMap = gameMap;
  }

  getGameMap() {
    return [...this.#bridgeGameMap];
  }

  getMapLength() {
    return this.#bridgeGameMap.length;
  }
}

module.exports = GameMap;
