const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
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
    this.#bridge = new Bridge(size);
  }

  movePlayer(direction) {
    const canCross = this.#bridgeGame.move(
      direction,
      this.#bridge.getBridge()[this.#player.getCurPlace()]
    );
    this.#player.increaseCurPlace();
    if (canCross) this.#bridge.updateBridgeMap(direction, 'O');
    else this.#bridge.updateBridgeMap(direction, 'X');
    return canCross;
  }

  printCurMap() {
    const curMap = this.#bridge.getBridgeMap();
    OutputView.printMap(curMap, false);
  }

  checkGameComplete() {
    if (this.#bridge.getSize() === this.#player.getCurPlace()) {
      this.#player.setSuccess();
      return true;
    }
    return false;
  }

  checkCommend(decision) {
    return this.#bridgeGame.retry(decision);
  }

  initData() {
    this.#player.increaseNumberOfAttempts();
    this.#player.initCurPlace();
    this.#bridge.initBridgeMap();
  }

  printGameResult() {
    OutputView.printResult(
      Object.values(this.#bridge.getBridgeMap()),
      this.#player.getSuccess(),
      this.#player.getNumberOfAttempts()
    );
  }
}

module.exports = GameService;
