class Bridge {
  #data;

  constructor(bridge) {
    this.#data = bridge;
  }

  isCrossed(moving, location) {
    return this.#data[location] === moving;
  }
}

module.exports = Bridge;
