const Player = require('./Player');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { MARK, CONDITION } = require('./utils/constant');

class BridgeGame {
  #bridge;
  #player;
  #attempts;

  constructor(size) {
    this.#bridge = makeBridge(size, generate);
    this.#player = new Player();
    this.#attempts = 1;
  }

  isMovable(direction) {
    return direction === this.#bridge[this.#player.getCurrentLocation()];
  }

  move(direction) {
    const movable = this.isMovable(direction);
    const mark = movable ? MARK.CIRCLE : MARK.CROSS;
    this.#player.updatePath(direction, mark);

    return movable;
  }

  isGameClear() {
    return this.#player.getCurrentLocation() === this.#bridge.length;
  }

  isRetry(command) {
    return command === CONDITION.REGAME;
  }

  retry() {
    this.#attempts += 1;
    this.#player.resetPath();
  }

  getAttempts() {
    return this.#attempts;
  }

  getPath() {
    return this.#player.getPath();
  }
}

module.exports = BridgeGame;
