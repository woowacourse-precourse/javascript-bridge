class Bridge {
  #route;

  constructor(bridge) {
    this.#route = bridge;
  }

  getRoute() {
    return this.#route;
  }
}

module.exports = Bridge;
