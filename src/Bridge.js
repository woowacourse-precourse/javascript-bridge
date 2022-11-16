class Bridge {
  #size;
  #spaces;

  constructor(size) {
    this.validate(size);
    this.#size = size;
  }

  validate() {}
}

module.exports = Bridge;
