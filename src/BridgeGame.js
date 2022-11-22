const { init, game } = require('./utils/constant');
const { UP, DOWN } = init;
const { UP_CHAR, CANMOVE, CANNOTMOVE, EMPTY } = game;

class BridgeGame {
  #bridge;
  #curBridge;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#curBridge = Array.from({ length: init.CURBRIDGE_LENGTH }, () => []);
  }

  move(moveInput, brigeIndex) {
    if (this.canMove(moveInput, brigeIndex)) {
      moveInput === UP_CHAR ? this.moveUpSuccess() : this.moveDownSuccess();
      return this.#curBridge;
    }
    moveInput === UP_CHAR ? this.moveUpFail() : this.moveDownFail();
    return this.#curBridge;
  }

  retry() {
    this.#curBridge[UP] = [];
    this.#curBridge[DOWN] = [];
    return this.#curBridge;
  }

  canMove(moveInput, brigeIndex) {
    return moveInput === this.#bridge[brigeIndex];
  }

  moveUpSuccess() {
    this.#curBridge[UP].push(CANMOVE);
    this.#curBridge[DOWN].push(EMPTY);
  }

  moveDownSuccess() {
    this.#curBridge[UP].push(EMPTY);
    this.#curBridge[DOWN].push(CANMOVE);
  }

  moveUpFail() {
    this.#curBridge[UP].push(CANNOTMOVE);
    this.#curBridge[DOWN].push(EMPTY);
  }

  moveDownFail() {
    this.#curBridge[UP].push(EMPTY);
    this.#curBridge[DOWN].push(CANNOTMOVE);
  }
}

module.exports = BridgeGame;
