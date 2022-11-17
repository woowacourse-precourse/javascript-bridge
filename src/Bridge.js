class Bridge {
  #size;
  #spaces;

  constructor(size) {
    this.validate(size);
    this.#size = size;
  }

  validate() {}

  getSize() {
    return this.#size;
  }
}

module.exports = Bridge;
