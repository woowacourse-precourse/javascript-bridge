const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const { DIRECTION } = require('./constant');
const Player = require('./Player');
const OutputView = require('./views/OutputView');

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
    this.#player.setCurPlace(this.#player.getCurPlace() + 1);
    if (canCross) this.#bridge.setBridgeMap(direction, 'O');
    else this.#bridge.setBridgeMap(direction, 'X');
    return canCross;
  }

  printCurMap() {
    const curMap = this.#bridge.getBridgeMap();
    return Object.values(curMap);
  }

  checkGameComplete() {
    this.#player.setSuccess();
    return this.#bridge.getSize() === this.#player.getCurPlace();
  }

  printGameResult() {
    OutputView.printResult(
      Object.values(this.#bridge.getBridgeMap()),
      this.#player.getSuccess(),
      this.#player.getNumberOfAttempts()
    );
  }

  checkRetry(decision) {
    this.#bridgeGame.retry(decision);
  }

  retry() {
    this.#player.setNumberOfAttempts(this.#player.getNumberOfAttempts() + 1);
    this.#player.initCurPlace();
    this.#bridge.initBridgeMap();
  }
}

module.exports = GameService;
