/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { MOVEMENT } = require('./utils/Constant');

class BridgeGame {
  #bridge;
  #bridgeAttempt;
  #gameSuccess;
  #gameCount;
  #upSide = [];
  #downSide = [];

  constructor(bridge) {
    this.#bridge = bridge;
    this.#bridgeAttempt = 0;
    this.#gameCount = 1;
  }

  #setUpside() {
    this.#upSide.push(1);
    this.#downSide.push(0);
  }

  #setDownSide() {
    this.#downSide.push(1);
    this.#upSide.push(0);
  }

  #setGameStatus(moving) {
    this.#gameSuccess = moving === this.#bridge[this.#bridgeAttempt - 1];
  }

  #setAttempt() {
    this.#bridgeAttempt += 1;
  }

  isMoveSuccess(moving) {
    this.#setAttempt();
    this.#setGameStatus(moving);
    return moving === this.#bridge[this.#bridgeAttempt - 1];
  }

  move(moving) {
    moving == MOVEMENT.UP ? this.#setUpside() : this.#setDownSide();
    return [this.#upSide, this.#downSide];
  }

  isEnd() {
    return this.#bridge.length === this.#bridgeAttempt;
  }

  retry() {
    this.#bridgeAttempt = 0;
    this.#upSide = [];
    this.#downSide = [];
    this.#gameCount += 1;
  }

  quit() {
    return [[this.#upSide, this.#downSide], this.#gameSuccess, this.#gameCount];
  }
}

module.exports = BridgeGame;
