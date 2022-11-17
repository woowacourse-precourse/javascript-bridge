const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const Player = require('./Player');

class GameService {
  #player;
  #bridge;
  #bridgeGame;

  constructor() {
    this.#player = new Player();
    this.#bridgeGame = new BridgeGame();
  }

  makeBridge(size) {
    // validator();
    this.#bridge = new Bridge(size);
  }

  movePlayer(direction) {
    // validator();
    const canCross = this.#bridgeGame.move(
      direction,
      this.#bridge.getBridge()[this.#player.getCurPlace()]
    );
    if (canCross) this.#bridge.setBridgeMap(direction, 'O');
    else this.#bridge.setBridgeMap(direction, 'X');
  }

  printCurMap() {
    const curMap = this.#bridge.getBridgeMap();
    return Object.values(curMap);
  }
}

module.exports = GameService;
