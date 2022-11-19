class Bridge {
  #bridge

  constructor(numbers) {
    this.#bridge = numbers;
  }

  get answer() {
    return this.#bridge;
  }

}

module.exports = Bridge;