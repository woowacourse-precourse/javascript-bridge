class ArraySize {
  #arr;

  constructor(size) {
    this.#arr = Array.from({ length: size });
  }
  // size 길이의 배열 반환
  getArr() {
    return this.#arr;
  }
}

module.exports = ArraySize;
