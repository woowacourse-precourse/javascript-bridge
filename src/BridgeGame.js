class BridgeGame {
  #bridge;
  #turn;

  constructor() {
    this.#turn = 0;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  isAccord(direction) {
    return direction === this.#bridge[this.#turn];
  }

  move() {
    this.#turn += 1;
  }

  isEnd() {
    return this.#turn === this.#bridge.length;
  }

  retry() {
    this.#turn = 0;
    
  }
}

module.exports = BridgeGame;
