class MovingCount {
  #totalMovingCount;
  #currentMovingCount;

  constructor() {
    this.#totalMovingCount = 0;
    this.#currentMovingCount = 0;
  }

  add1MovingCount() {
    this.#totalMovingCount += 1;
    this.#currentMovingCount += 1;
  }
}
