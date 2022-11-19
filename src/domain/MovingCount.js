class MovingCount {
  #totalMovingCount;

  constructor() {
    this.#totalMovingCount = 0;
  }

  plusTotalMovingCount() {
    this.#totalMovingCount += 1;
  }

  getTotalMovingCount() {
    return this.#totalMovingCount;
  }
}

module.exports = MovingCount;
