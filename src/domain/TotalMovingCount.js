const TotalMovingCount = class {
  #totalMovingCount;

  constructor() {
    this.#totalMovingCount = 1;
  }

  addMovingCount() {
    this.#totalMovingCount += 1;
  }

  getTotalMovingCount() {
    return this.#totalMovingCount;
  }
};

module.exports = TotalMovingCount;
