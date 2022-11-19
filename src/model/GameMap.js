class GameMap {
  #bridgeMap;

  setGameMap(gameMap) {
    this.#bridgeMap = gameMap;
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }
}

module.exports = GameMap;
