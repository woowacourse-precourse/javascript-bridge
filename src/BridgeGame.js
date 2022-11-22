class BridgeGame {
  #bridge;
  #curBridge;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#curBridge = Array.from({ length: 2 }, () => []);
  }

  move(moveInput, brigeIndex) {
    if (this.canMove(moveInput, brigeIndex)) {
      moveInput === 'U' ? this.moveUpSuccess() : this.moveDownSuccess();
      return this.#curBridge;
    }
    moveInput === 'U' ? this.moveUpFail() : this.moveDownFail();
    return this.#curBridge;
  }

  retry() {
    this.#curBridge[0] = [];
    this.#curBridge[1] = [];
    return this.#curBridge;
  }

  canMove(moveInput, brigeIndex) {
    return moveInput === this.#bridge[brigeIndex];
  }

  moveUpSuccess() {
    this.#curBridge[0].push('O');
    this.#curBridge[1].push(' ');
  }

  moveDownSuccess() {
    this.#curBridge[0].push(' ');
    this.#curBridge[1].push('O');
  }

  moveUpFail() {
    this.#curBridge[0].push('X');
    this.#curBridge[1].push(' ');
  }

  moveDownFail() {
    this.#curBridge[0].push(' ');
    this.#curBridge[1].push('X');
  }
}

module.exports = BridgeGame;
