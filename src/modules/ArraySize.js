class ArraySize {
  #arrUp;
  #arrDown;

  constructor(size) {
    this.#arrUp = Array.from({ length: size });
    this.#arrDown = Array.from({ length: size });
  }
  getArrUp() {
    return this.#arrUp;
  }
  getArrDown() {
    return this.#arrDown;
  }
}

module.exports = ArraySize;
