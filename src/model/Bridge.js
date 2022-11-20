class Bridge {
  #layout;

  get layout() {
    return this.#layout;
  }

  set layout(value) {
    this.#layout = value;
  }
}

module.exports = Bridge;
