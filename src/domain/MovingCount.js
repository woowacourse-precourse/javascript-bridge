class MovingCount {
  #totalMovingCount;
  #currentBridgeLocation;

  constructor() {
    this.#totalMovingCount = 0;
    this.#currentBridgeLocation = 0;
  }

  add1MovingCount() {
    this.#totalMovingCount += 1;
    this.#currentBridgeLocation += 1;
  }

  getTotalMovingCount() {
    return this.#totalMovingCount;
  }

  resetCurrentMovingCount() {
    this.#currentBridgeLocation = 0;
  }
}
