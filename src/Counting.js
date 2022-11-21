class Counting {
  #count;

  constructor() {
    this.#count;
    this.initCount();
  }

  initCount() {
    this.#count = 1;
  }

  addCount() {
    this.#count += 1;
  }

  getCount() {
    return this.#count;
  }
}

module.exports = Counting;
