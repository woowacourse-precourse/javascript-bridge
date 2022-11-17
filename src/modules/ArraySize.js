class ArraySize {
  #arr;

  constructor(size) {
    this.#arr = Array.from({ length: size });
  }
  getArr() {
    return this.#arr;
  }
}

module.exports = ArraySize;
