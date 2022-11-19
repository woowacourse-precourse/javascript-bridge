class Player {
  #position;
  #tryCount;

  constructor() {
    this.#position = 0;
    this.#tryCount = 1;
  }

  move() {
    this.#position += 1;
  }

  retry() {
    this.#position = 0;
    this.#tryCount += 1;
  }

  isMovableNextStep(position, bridge) {
    return bridge.getPassableBridge(this.#position + 1) === position;
  }
}
